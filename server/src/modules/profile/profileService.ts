import UserModel from "../../models/UserModel";
import { UserDto } from "../../dtos/UserDto";

import { ApiError } from "../../exceptions/ApiError";

class ProfileService {
    async getMyProfile(userId: string): Promise<UserDto> {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw ApiError.badRequest(403, 'User not found');
        }

        const userDto = new UserDto(user);

        return userDto

    }
}

export default new ProfileService();