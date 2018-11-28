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

/**
 * El servicio que se encarga de todo lo que tiene que ver con espectaculo
 */
@Injectable({
  providedIn: 'root'
})
export class EspectaculoService {

    
  /**
   * Constructor del servicio
   * @param HttpClient- Este hace los llamados y consultas
   */
  constructor(private http: HttpClient) { }
  
  
  /**
   * Retorna un objeto de tipo Observable, parametrizado con un arreglo de espectaculos
   * que se los pide al api del back
   */
  getEspectaculos():Observable<Espectaculo[]>
  {
      return this.http.get<Espectaculo[]>(API_URL + espectaculos);
  }
  
  /**
   * Retorna un objeto Observable, de tipo espectaculo Detail, llamando al api, al 
   * recurso de espectaculo, el procedimiento de get
   */
  getEspectaculoDetail(espectaculoId:number):Observable<EspectaculoDetail>
  {
      return this.http.get<EspectaculoDetail>(API_URL + espectaculos + '/' + espectaculoId);
      
  }
  
  
  /**
   * Retorna un objeto Observable, de tipo Espectaculo, haciendo uso servicio de post del api
   */
  crearEspectaculo(espectaculo): Observable<Espectaculo>
  {
      return this.http.post<Espectaculo>(API_URL + espectaculos, espectaculo);
  }
  
  /**
*Retorna un objeto Observable de tipo Espectaculo, haciendo uso del servicio put del api
*Actualiza un espectaculo
**/
updateEspectaculo(espectaculo): Observable<Espectaculo>
{
    return this.http.put<Espectaculo>(API_URL + espectaculos +'/'+ espectaculo.id, espectaculo)
}
  
    /**
    * Borra uno de los espectaculos
    * @param espectaculoId El id del espectaculo
    * @returns La confirmacion de que el espectaculo fue borrado
    */
    deleteEspectaculo(espectaculoId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + espectaculos + '/' + espectaculoId);
    }
  
}
