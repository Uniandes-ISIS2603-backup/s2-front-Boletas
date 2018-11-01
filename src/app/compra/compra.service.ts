import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { CompraDetail } from './compra-detail';

const API_URL = environment.apiURL;
const compras = '/compras';
//const API_URL = '../../assets/';
//const compras = 'compras.json';
@Injectable()
export class CompraService {
    
    constructor(private http: HttpClient) { }
    
    createCompra(compra): Observable<boolean> {
        return this.http.post<boolean>(API_URL + compras, compra);
    }
    
    getCompraDetail(compraId: number): Observable<CompraDetail> {
        return this.http.get<CompraDetail>(API_URL + compras + '/' + compraId);
    }
    
    getCompras() : Observable<Compra[]> {
        return this.http.get<Compra[]>(API_URL + compras);
    }
    
}
