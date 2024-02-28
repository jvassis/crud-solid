import Cliente from "../core//Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default class RepositorioLocal implements ClienteRepositorio {
    private clientes: Cliente[];

    constructor() {      
        this.clientes = [];
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        const id = cliente.id ?? this.clientes.length + "";

        if (cliente.id) {
            await this.excluir(cliente);
        }

        const novoCliente = new Cliente(cliente.nome, cliente.idade, id);

        await this.clientes.push(novoCliente);
        
        return novoCliente;
    }

    async excluir(cliente: Cliente): Promise<void> {
        //const index = await this.clientes.findIndex(c => c === cliente);
        const index = await this.clientes.findIndex(c => c.id === cliente.id);
        
        if (index !== -1) {
            this.clientes.splice(index, 1);
        }
    }

    async obterTodos(): Promise<Cliente[]> {
        return await this.clientes;
    }
}
