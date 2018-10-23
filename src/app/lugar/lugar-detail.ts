import {Lugar} from './lugar';
import {Silla} from '../silla/silla';

export interface LugarDetail extends Lugar{
    lugares: Lugar[];
}
