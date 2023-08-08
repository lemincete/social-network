import { validationResult } from 'express-validator';
import { Request } from 'express';

import { ApiError } from '../../exceptions/ApiError';

export const validationQueries = (req: Request) => {
    const resultValidation = validationResult(req);

    if (!resultValidation.isEmpty()) {
        const errors = resultValidation.mapped();

        let errorMessage = '';

        for (let key in errors) {
            errorMessage += errors[key].msg + '. ';
        }

        throw ApiError.badRequest(400, errorMessage);
    }
}