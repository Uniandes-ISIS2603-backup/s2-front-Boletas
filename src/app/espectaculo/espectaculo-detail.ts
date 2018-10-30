import {Espectaculo} from './espectaculo';
import {Boleta} from '../boleta/boleta';
import {Comentario} from '../comentario/comentario';

export class EspectaculoDetail extends Espectaculo{
    
    boletas: Boleta[];
    
    comentarios : Comentario[];
    
}
