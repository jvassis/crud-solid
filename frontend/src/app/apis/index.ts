import axios from "axios";
import Cliente from "../core/Cliente";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default class ClienteApi {
    api: any;

    constructor() {
        this.api = api;
    }

    async obterTodos(): Promise<Cliente[]> {
        const { data: clientes } = await this.api.get("/clientes");
        return clientes;
    }

    async salvar(cliente: Cliente) {
        const clienteObj = {
            nome: cliente.nome,
            idade: cliente.idade,
            id: cliente.id ?? null
        }

        await this.api.post("/clientes", clienteObj);
    }

    async excluir(cliente: Cliente) {
        await this.api.delete(`/clientes/${cliente.id}`)
    }
}