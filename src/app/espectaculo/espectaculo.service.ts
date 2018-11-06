import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Espectaculo} from './espectaculo';
import {EspectaculoDetail} from './espectaculo-detail';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const espectaculos = '/espectaculos';

//const API_URL = '../../assets';
//const espectaculos = '/espectaculos.json';

@Injectable({
  providedIn: 'root'
})
export class EspectaculoService {

  constructor(private http: HttpClient) { }
  
  getEspectaculos():Observable<Espectaculo[]>
  {
      return this.http.get<Espectaculo[]>(API_URL + espectaculos);
  }
  
  getEspectaculoDetail(espectaculoId:number):Observable<EspectaculoDetail>
  {
      return this.http.get<EspectaculoDetail>(API_URL + espectaculos + '/' + espectaculoId);
      
  }
  
  crearEspectaculo(espectaculo): Observable<Espectaculo>
  {
      return this.http.post<Espectaculo>(API_URL + espectaculos, espectaculo);
  }
  
  
}
