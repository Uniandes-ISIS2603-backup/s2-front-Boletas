/**
 * Esta clase define la representacion de un espectaculo.
 * Contiene toda la informacion con respecto a esta.
 */
export interface Espectaculo {
    
    /**
     * El id del espectaculo
     */
    id:number;
    
    /**
     * Nombre de la editorial
     */
    nombre: string;
    
    /**
     * Fecha en la cual se va a realizar el espectaculo
     */
    fecha: Date;
    
    /*
     * Descripcion del espectaculo
     */
    descripcion: string;
    
    /*
     * Artista del espectaculo, en caso de ser muchos
     * va a ser una cadena, cada artista separado por un ;
     */
    artista: string;
    
    /*
     * Tipo del espectaculo
     */
    tipo:string;    
    
}
