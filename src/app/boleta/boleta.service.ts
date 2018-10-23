import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boleta } from './boleta';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BoletaDetail } from './boleta-detail';

const API_URL = environment.apiURL;
const boletas = 'boletas';

@Injectable()
export class BoletaService {
    
    constructor(private http: HttpClient) { }
    
     getBoletaDetail(boletaId): Observable<BoletaDetail> {
        return this.http.get<BoletaDetail>(API_URL + boletas + '/' + boletaId);
    }
  
    getBoletas() : Observable<Boleta[]> {
        return this.http.get<Boleta[]>(API_URL + boletas);
    }
    
}
