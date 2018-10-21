/* 
 * Esta clase define la representación de una boleta
 */
 export interface Boleta
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
       fecha:Date;

       /**
        * Indica si la boleta está vendida o no
        */
        vendida: boolean;
     }

