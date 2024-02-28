import Cliente from "../../entidades/Cliente";
import ISalvarClienteRepositorio from "../ISalvarClienteRepositorio";

export class LocalRepositorio implements ISalvarClienteRepositorio {
    private clientes: Cliente[] = [];

    async salvar(cliente: Cliente): Promise<void> {
        this.clientes.push(cliente);
    }

    // async excluir(cliente: Cliente): Promise<void> {
    //     const index = this.clientes.findIndex(c => c === cliente);
    //     if (index !== -1) {
    //         this.clientes.splice(index, 1);
    //     }
    // }

    // async obterTodos(): Promise<Cliente[]> {
    //     return await this.clientes;
    // }
}