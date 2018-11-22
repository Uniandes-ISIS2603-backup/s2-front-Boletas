import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lugar} from './lugar';
import {Observable} from 'rxjs';
import {LugarDetail} from './lugar-detail';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const lugares = "/lugares";

@Injectable({
  providedIn: 'root'
})
export class LugarService {
    
    /**
     * Constructor de la clase.
     */
  constructor(private http: HttpClient) { }
  
  /**
   * Métodos que retorna la lista de lugares del back.
   */
  getLugares(): Observable<Lugar[]>
  {
      return this.http.get<Lugar[]>(API_URL + lugares);
  }
  
  /**
   * Método que retorna el detail de lugar
   */
  getLugarDetail(lugarId): Observable<LugarDetail> {
      return this.http.get<LugarDetail>(API_URL + lugares + '/'+lugarId);
  }
  /**
   * Método que crea un lugar.
   */
  createLugar(lugar):Observable<Lugar>
  {
      return this.http.post<Lugar>(API_URL + lugares, lugar);
  }
}
