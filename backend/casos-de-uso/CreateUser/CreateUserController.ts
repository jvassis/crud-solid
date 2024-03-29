import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        name,
        password
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: 'Unexpected error.'
      })
    }
  }
}