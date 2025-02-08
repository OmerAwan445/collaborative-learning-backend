import { IUserRepository } from "@interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
    
    async getById() {
        console.log('User found');
        return null;
    }
    
    async create() {
        console.log('User created');
        return null;
    }

}