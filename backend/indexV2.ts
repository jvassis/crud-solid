import express, { Request, Response } from 'express';
import cors from "cors";
import { salvarClienteControlador } from './casos-de-uso/salvar-cliente';
import { getUserController } from './casos-de-uso/GetUser';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post("/v2/clientes", async (req: Request, res: Response) => {
    return salvarClienteControlador.handle(req, res);
});

app.get("/v2/clientes", async (req: Request, res: Response) => {
    return getUserController.handle(req, res);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
