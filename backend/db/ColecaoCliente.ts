import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core//ClienteRepositorio";

export default class ColecaoCliente {
    private repositorio: ClienteRepositorio;

    constructor(repositorio: ClienteRepositorio) {
        this.repositorio = repositorio;
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        return await this.repositorio.salvar(cliente);
    }

    async excluir(cliente: Cliente): Promise<void> {
        return await this.repositorio.excluir(cliente);
    }

    async obterTodos(): Promise<Cliente[]> {
        return await this.repositorio.obterTodos();
    }
}