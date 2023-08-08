export class ApiError extends Error {

    status;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }

    static badRequest(status: number, message: string) {
        return new ApiError(status, message);
    }

    static unAuthorizedError() {
        return new ApiError(401, 'Unauthorized')
    }

}