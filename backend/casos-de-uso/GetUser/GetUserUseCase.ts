import { IUsersRepository } from "../../repositorios/IUserRepository";

export default class GetUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute() {
    return await this.usersRepository.getAll();
  }
}