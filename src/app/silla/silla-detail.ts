
import { Silla } from './silla';
import {Lugar} from '../lugar/lugar';
import {Boleta} from '../boleta/boleta';

export interface SillaDetail extends Silla{
    lugar: Lugar;
    boleta: Boleta;
}
