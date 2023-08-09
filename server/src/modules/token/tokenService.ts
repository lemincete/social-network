import jwt from 'jsonwebtoken';

import { UserDto } from '../../dtos/UserDto';

import TokenModel from '../../models/TokenModel';
import { ApiError } from '../../exceptions/ApiError';
import UserModel from '../../models/UserModel';

class TokenService {
    generateTokens(user: UserDto): { accessToken: string, refreshToken: string } {

        const accessToken = jwt.sign({ ...user }, process.env.JWT_ACCESS_SECRET as string, {
            expiresIn: '1h'
        })

        const refreshToken = jwt.sign({ ...user }, process.env.JWT_REFRESH_SECRET as string, {
            expiresIn: '30d'
        })

        return { accessToken, refreshToken }
    }

    async saveToken(user: string, refreshToken: string) {
        const tokenData = await TokenModel.findOne({ user });

        if (tokenData) {
            tokenData.refreshToken = refreshToken;

            return tokenData.save();
        }

        const token = new TokenModel({ user, refreshToken });

        return token.save();
    }

    validateAccessToken(token: string) {
        try {
            const { _id } = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string) as UserDto
            return _id
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token: string) {
        try {
            const { _id } = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as UserDto
            return _id
        } catch (e) {
            return null
        }
    }

    async refreshToken(refreshToken: string): Promise<{ tokens: { accessToken: string, refreshToken: string }, user: UserDto }> {
        const userId = this.validateRefreshToken(refreshToken);
        const refreshTokenFromDb = await TokenModel.findOne({ refreshToken });

        if (!userId || !refreshTokenFromDb) {
            throw ApiError.unAuthorizedError();
        }

        const user = await UserModel.findById(userId);

        if (!user) {
            throw ApiError.unAuthorizedError();
        }

        const userDto = new UserDto(user);

        const tokens = this.generateTokens(userDto);

        await this.saveToken(userId, tokens.refreshToken);

        return { tokens, user: userDto }

    }
}


export default new TokenService();