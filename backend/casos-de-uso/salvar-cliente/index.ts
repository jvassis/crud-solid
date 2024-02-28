import { LocalRepositorio } from "../../repositorios/implementacoes/LocalRepositorio";
import CasoDeUsoSalvarCliente from "./CasoDeUsoSalvarCliente";
import SalvarClienteControlador from "./SalvarClienteControlador";

const localRepositorio = new LocalRepositorio();
const casoDeUsoSalvarCliente = new CasoDeUsoSalvarCliente(localRepositorio);
const salvarClienteControlador = new SalvarClienteControlador(casoDeUsoSalvarCliente);

export { casoDeUsoSalvarCliente, salvarClienteControlador }