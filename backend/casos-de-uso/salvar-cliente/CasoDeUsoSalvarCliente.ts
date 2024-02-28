import Cliente from "../../entidades/Cliente";
import IClienteRepositorio from "../../repositorios/ISalvarClienteRepositorio";
import { IClienteRequisicaoSalvarDTO } from "./SalvarClienteDTO";

export default class CasoDeUsoSalvarCliente {
    constructor (
        private clienteRepositorio: IClienteRepositorio
    ) {}

    async execute(data: IClienteRequisicaoSalvarDTO) {
        const cliente = new Cliente(data);
        await this.clienteRepositorio.salvar(cliente);
    }

    // async excluir(data: IClienteRequisicaoExcluirDTO) {
    //     const cliente = new Cliente({ nome: "", idade: 0 }, data.id);
    //     await this.clienteRepositorio.excluir(cliente);
    // }

    // async obterTodos() {
    //     return await this.clienteRepositorio.obterTodos();
    // }
}