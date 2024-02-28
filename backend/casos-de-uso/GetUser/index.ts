import { PostgresUsersRepository } from "../../repositorios/implementacoes/PostgresUsersRepository"
import { GetUserController } from "./GetUserController"
import GetUserUseCase from "./GetUserUseCase"

const postgresUsersRepository = new PostgresUsersRepository()

const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository
)

const getUserController = new GetUserController(
  getUserUseCase
)

export { getUserUseCase, getUserController }