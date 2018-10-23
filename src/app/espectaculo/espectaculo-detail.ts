import {Espectaculo} from './espectaculo';
import {Boleta} from '../boleta/boleta';
import {Comentario} from '../comentario/comentario';

export interface EspectaculoDetail extends Espectaculo{
    
    boletas: Boleta[];
    
    comentarios : Comentario[];
    
}
