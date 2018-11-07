
import { Silla } from './silla';
import {Lugar} from '../lugar/lugar';
import {Boleta} from '../boleta/boleta';

export class SillaDetail extends Silla{
    lugar: Lugar;
    boleta: Boleta;
}
