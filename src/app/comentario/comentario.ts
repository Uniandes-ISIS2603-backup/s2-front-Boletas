import { Espectaculo } from '../espectaculo/espectaculo';
import { Cliente } from '../cliente/cliente';
/**
 * Esta clase define la representación de un comentario
 */
 export class Comentario{
     
     /**
      *  El id del comentario
      */
      id: number;
      
      /**
       * El mensaje del comentario
       */
       mensaje:string;
       
       /**
        * El cliente que realiza el comentario
        */
        cliente: Cliente;
        
        /**
         * El espectaculo al que se le agrega el comentario
         */
         espectaculo: Espectaculo;
 }


