import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const compras = 'compras.json';

@Injectable()
export class ComprasService {
    
    constructor(private http: HttpClient) { }
    
  
    getCompras() : Observable<Compra[]> {
        return this.http.get<Compra[]>(API_URL + compras);
    }
    
}
