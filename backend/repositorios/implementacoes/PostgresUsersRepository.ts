import { User } from "../../entidades/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    console.log(this.users);
    
    this.users.push(user);
  }

  async getAll(): Promise<User[]> {
    return this.users;  
  }
}