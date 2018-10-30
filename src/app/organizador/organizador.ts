/**
*Esta clase representa la interface de un organizador
*@author Vilma Tirado Gomez
**/
export interface Organizador
{
  /**
  * Identificador del organizador
  */
  id: number;
  
      /**
    * usuario del organizador 
    **/
    usuario:String;
    
    /**
    * nombre del organizador 
    **/
    nombre:string;
    
   /**
    * presupuesto del organizador 
    **/
    presupuesto:number;
    
    /**
    * ganancia del organizador 
    **/
    ganancia: number;
}
