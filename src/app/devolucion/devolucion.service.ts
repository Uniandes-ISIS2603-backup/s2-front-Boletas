import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devolucion } from './devolucion';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const devoluciones = '/devoluciones';

@Injectable()
export class DevolucionService {

    constructor(private http: HttpClient) { }
    
    createDevolucion(devolucion): Observable<Devolucion> {
        return this.http.post<Devolucion>(API_URL + devoluciones, devolucion);
    }
    
    getDevolucionDetail(devolucionId: number): Observable<Devolucion> {
        return this.http.get<Devolucion>(API_URL + devoluciones + '/' + devolucionId);
    }
    
      getDevoluciones() : Observable<Devolucion[]> {
        return this.http.get<Devolucion[]>(API_URL + devoluciones);
    }
    
}
