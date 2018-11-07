import { Espectaculo } from '../espectaculo/espectaculo';
import { Compra } from '../compra/compra';
/* 
 * Esta clase define la representación de una boleta
 */
 export class Boleta
 {
     /**
     * El id de la boleta
     */
     id: number;

     /**
      * precio de la boleta
      */
      precio: number;

      /**
       * Fecha de la boleta
       */
       fecha:any;

       /**
        * Indica si la boleta está vendida o no
        */
        vendida: boolean;
        
        /**
        * La compra de la boleta
        */
        compra:Compra;
         
        /**
        * El espectaculo de la boleta
        */
        espectaculo: Espectaculo;
     }

