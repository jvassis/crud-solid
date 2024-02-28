import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteApi from "../apis";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const repo = new ClienteApi();
    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);
    
    const { tabelaVisivel, exibirForm, exibirTabela } = useTabelaOuForm();

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        })
    }

    useEffect(obterTodos, []);

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirForm();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirForm();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos();
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        clientes,
        cliente,
        tabelaVisivel,
        exibirTabela
    }
}