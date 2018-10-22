import { Boleta } from "../boleta/boleta";

import { Compra } from "./Compra";
export interface CompraDetail extends Compra
{
    boletas : Boleta[];
}
