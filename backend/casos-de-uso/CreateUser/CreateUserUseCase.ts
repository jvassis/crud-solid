import { User } from "../../entidades/User";
import { IUsersRepository } from "../../repositorios/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const user = new User(data);

    await this.usersRepository.save(user);
  }
}