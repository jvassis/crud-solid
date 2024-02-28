import { Request, Response } from "express";
import CasoDeUsoSalvarCliente from "./CasoDeUsoSalvarCliente";

export default class SalvarClienteControlador {
    constructor(
        private casoDeUsoSalvarCliente: CasoDeUsoSalvarCliente
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, idade } = request.body;

        try {
            await this.casoDeUsoSalvarCliente.execute({ nome, idade });
            return response.status(201).send();
        } catch (erro) {
            return response.status(400).json({ messagem: "Erro inesperado!" })
        }
    }
}