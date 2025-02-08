import { IUserRepository } from "@interfaces/IUserRepository";
import { IAuthInteractor } from "./IAuthInteractor";

export class AuthInteractor implements IAuthInteractor {
    private _userRepo: IUserRepository;

    constructor(userRepo: IUserRepository) {
        this._userRepo = userRepo;
    }

    async signin() {
        const user = await this._userRepo.getById();
        return user;
    }

    async signup() {
        const data = this._userRepo.create();
        return data;
    }
}