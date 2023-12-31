import UserModel from "../../models/UserModel";
import SubsModel from "../../models/SubsModel";

import { UserDto } from "../../dtos/UserDto";

import { ApiError } from "../../exceptions/ApiError";

import { stringToCapitalize } from "./helpers/stringToCapitalize";

import bcrypt from 'bcrypt';

import { v2 as cloudinary } from 'cloudinary';

import { SubsDto } from "../../dtos/SubsDto";

class ProfileService {
    async getMyProfile(userId: string): Promise<UserDto> {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw ApiError.badRequest(403, 'User not found');
        }

        const userDto = new UserDto(user);

        return userDto
    }

    async getMySubs(user: string): Promise<SubsDto> {
        const subs = await SubsModel.findOne({ user });

        if (!subs) {
            throw ApiError.badRequest(400, 'Subs not found');
        }

        const subsDto = new SubsDto(subs);

        return subsDto

    }

    async updateProfile(user: string, name: string, surname: string, email: string, gender: string, password: string, image: string | null, bio: string): Promise<UserDto> {

        if (password && password.length > 0) {
            if (password.length < 8) {
                throw ApiError.badRequest(400, `Password is too short`)
            } else if (password.length > 16) {
                throw ApiError.badRequest(400, `Password is too long`);
            }
        }

        const candidate = await UserModel.findById(user);

        if (!candidate) {
            throw ApiError.badRequest(400, 'User not found');
        }

        if (password && password.length > 0) {
            const hashPassword = await bcrypt.hash(password, 7);
            candidate.password = hashPassword
        }

        const updatedFields = {
            name: stringToCapitalize(name),
            surname: stringToCapitalize(surname),
            gender: stringToCapitalize(gender),
            bio,
            email
        }

        if (image) {

            await cloudinary.uploader.upload(image, { public_id: `${name}_avatar`, folder: 'fanee/users' }, (error, result) => {

                const imageUrl = result?.secure_url

                if (imageUrl) {
                    candidate.image = imageUrl
                } else {
                    throw ApiError.badRequest(400, 'Error upload image')
                }
            });
        } else if (image === null) {
            candidate.image = ''
        }

        Object.assign(candidate, updatedFields);

        const result = await candidate.save();

        const userDto = new UserDto(result);

        return userDto

    }
}

export default new ProfileService();