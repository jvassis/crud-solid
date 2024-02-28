import { uuid } from 'uuidv4'

export default class Cliente {
  public id?: string;
  public nome: string;
  public idade: number;

  // constructor(props: Omit<Cliente, 'id'>, id?: string) {
  //   Object.assign(this, props);

  //   if (!id) {
  //     this.id = uuid();
  //   }
  // }

  constructor(props: Cliente) {
    this.id = props.id ?? uuid();
    this.idade = props.idade;
    this.nome = props.nome;
  }
}
