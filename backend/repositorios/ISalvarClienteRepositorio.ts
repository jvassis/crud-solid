import Cliente from "../entidades/Cliente";

export default interface ISalvarClienteRepositorio {
    salvar(cliente: Cliente): Promise<void>;
    //excluir(cliente: Cliente): Promise<void>;
    //obterTodos(): Promise<Cliente[]>;
}