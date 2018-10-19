import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Espectaculo} from './espectaculo';
import {Observable} from 'rxjs';

const API_URL = '../../assets/';
const espectaculos = 'espectaculos.json';

@Injectable({
  providedIn: 'root'
})
export class EspectaculoService {

  constructor(private http: HttpClient) { }
  
  getEspectaculos():Observable<Espectaculo[]>
  {
      return this.http.get<Espectaculo[]>(API_URL + espectaculos);
  }
  
  
}
