import {Cliente} from "../cliente/cliente";

export class Compra {

    id: number;
    costoTotal: number;
    envio:boolean;
    fecha:Date;
    direccion:string;
    estado:boolean;
    cliente:Cliente;
}