import {Lugar} from '../lugar/lugar';
import { Silla } from './silla';
import {Boleta} from '../boleta/boleta';

export class SillaDetail extends Silla{
    
    lugar:Lugar;    
    boleta: Boleta;
}
