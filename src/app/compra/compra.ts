//import (Cliente) from './cliente';
//import (Boleta) from './boleta';

export interface Compra {

    id: number;
    costoTotal: number;
    envio:boolean;
    fecha:Date;
    direccion:string;
    estado:boolean;
    //cliente:Cliente
    //boletas[]:Boleta
}