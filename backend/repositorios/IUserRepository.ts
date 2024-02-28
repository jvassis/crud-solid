import { User } from "../entidades/User";

export interface IUsersRepository {
  save(user: User): Promise<void>;
  getAll(): Promise<User[]>;
}