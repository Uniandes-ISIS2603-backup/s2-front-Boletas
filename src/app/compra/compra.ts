import {Cliente} from "../cliente/cliente";
import {Devolucion} from "../devolucion/devolucion";
export class Compra {

    id: number;
    costoTotal: number;
    envio:boolean;
    fecha:Date;
    direccion:string;
    estado:boolean;
    cliente:Cliente;
    devolucion: Devolucion;
}