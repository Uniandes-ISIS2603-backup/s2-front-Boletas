import {Espectaculo} from './espectaculo';
import {Boleta} from '../boleta/boleta';

export interface EspectaculoDetail extends Espectaculo{
    
    boletas: Boleta[];
    
    
    
}
