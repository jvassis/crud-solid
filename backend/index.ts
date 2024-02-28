import express, { Request, Response } from 'express';
import cors from "cors";
import ColecaoCliente from './db/ColecaoCliente';
import RepositorioLocal from './db/RepositorioLocal';
import Cliente from './core/Cliente';
import { salvarClienteControlador } from './casos-de-uso/salvar-cliente';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const colecaoCliente = new ColecaoCliente(new RepositorioLocal());

interface IClienteResponse {
    nome: string
    idade: number
    id?: string | null
}

app.get("/clientes", async (req: Request, res: Response<IClienteResponse[]>) => {
    const clientes = await colecaoCliente.obterTodos();
    const clienteMapped = clientes.map(c => ({ nome: c.nome, idade: c.idade, id: c.id ?? null }))
    res.status(200).json(clienteMapped);
});

app.post("/clientes", async (req: Request, res: Response) => {
    const {nome, idade, id} = req.body;
    const novoCliente = new Cliente(nome, idade, id);
    await colecaoCliente.salvar(novoCliente);

    res.status(201).json();
});

app.delete("/clientes/:id", async (req: Request, res: Response) => {
    //como excluir passando o cliente ao inves do id?
    await colecaoCliente.excluir(new Cliente("", 0, req.params.id));
    res.status(204).json();
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
