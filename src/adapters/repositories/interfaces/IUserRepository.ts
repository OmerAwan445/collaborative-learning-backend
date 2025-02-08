export interface IUserRepository {
    create() : Promise<unknown>;
    getById() : Promise<unknown>;
    
}