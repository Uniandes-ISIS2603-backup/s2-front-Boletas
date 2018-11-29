import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { CompraDetail } from './compra-detail';

const API_URL = environment.apiURL;
const compras = '/compras';

@Injectable()
export class CompraService {
    
    constructor(private http: HttpClient) { }
    
    createCompra(compra): Observable<Compra> {
        return this.http.post<Compra>(API_URL + compras, compra);
    }
    
    getCompraDetail(compraId: number): Observable<CompraDetail> {
        return this.http.get<CompraDetail>(API_URL + compras + '/' + compraId);
    }
    
    getCompras() : Observable<Compra[]> {
        return this.http.get<Compra[]>(API_URL + compras);
    }
    
    updateCompra(compra): Observable<CompraDetail> {
        return this.http.put<CompraDetail>(API_URL + compras + '/' + compra.id, compra);
    }
    
    deleteCompra(compraId): Observable<CompraDetail> {
        return this.http.delete<CompraDetail>(API_URL + compras + '/' + compraId);
    }
    
}
