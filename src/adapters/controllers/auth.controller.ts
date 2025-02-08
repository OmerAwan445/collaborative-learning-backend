import { Request } from "express";
import { catchAsyncError } from "@utils/helpers/catchAsyncError";
import { IAuthInteractor } from "interactors/auth/IAuthInteractor";

export class AuthController {
    private _authInteractor: IAuthInteractor;

    constructor(authInteractor: IAuthInteractor) {
        this._authInteractor = authInteractor;
    }

    signup = catchAsyncError(async (_: Request<object, object, object>, res) => {
        console.log("Request received");
        const data = await this._authInteractor.signup();
        return res.send(data);
    });

    signin = catchAsyncError(async (_: Request<object, object, object>, res) => {
        this._authInteractor.signin();
        return res.send('User signed in');
    });
}