export interface IAuthInteractor {
    signup() : Promise<unknown>;
    signin() : Promise<unknown>;
}