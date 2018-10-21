import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boleta } from './boleta';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const boletas = 'boletas.json';

@Injectable()
export class BoletaService {
    
    constructor(private http: HttpClient) { }
    
  
    getBoletas() : Observable<Boleta[]> {
        return this.http.get<Boleta[]>(API_URL + boletas);
    }
    
}
