import UserModel from "../../models/UserModel";
import SubsModel from "../../models/SubsModel";

import { ApiError } from "../../exceptions/ApiError";

import { stringToCapitalize } from "./helpers/stringToCapitalize";

import bcrypt from 'bcrypt';
import TokenService from "../token/tokenService";
import { UserDto } from "../../dtos/UserDto";


class AuthService {

    async registration(name: string, surname: string, password: string, gender: string, email: string): Promise<void> {

        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw ApiError.badRequest(400, 'Email is busy')
        }

        const hashPassword = bcrypt.hashSync(password, 7);

        const user = new UserModel({ name: stringToCapitalize(name), surname: stringToCapitalize(surname), password: hashPassword, gender: stringToCapitalize(gender), email });
        const subs = new SubsModel({ user: user._id });

        await user.save();
        await subs.save();
    }

    async login(email: string, password: string): Promise<{ accessToken: string, refreshToken: string }> {

        const candidate = await UserModel.findOne({ email });

        if (!candidate) {
            throw ApiError.badRequest(400, 'User not found')
        }

        const isPasswordValid = bcrypt.compareSync(password, candidate.password);

        if (!isPasswordValid) {
            throw ApiError.badRequest(400, 'Invalid password');
        }

        const userDto = new UserDto(candidate);

        const { accessToken, refreshToken } = TokenService.generateTokens(userDto);

        await TokenService.saveToken(candidate._id, refreshToken);

        return { accessToken, refreshToken };

    }

}

export default new AuthService();