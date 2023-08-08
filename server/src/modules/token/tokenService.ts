import jwt from 'jsonwebtoken';

import { UserDto } from '../../dtos/UserDto';

import TokenModel from '../../models/TokenModel';

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
}


export default new TokenService();