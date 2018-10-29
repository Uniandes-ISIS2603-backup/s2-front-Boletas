import {Compra} from '../compra/compra';
//import {Comentario} from '../comentario/comentario';
import {Cliente} from './cliente'

/**
*Inteface para ClienteDetail .
*@author Vilma Tirado Gomez
**/
export class ClienteDetail extends Cliente{
/**
* Compras del cliente
**/
compras: Compra[];

/**
* Comentarios hechos por el cliente
**/
//comentarios: Comentario[]
}