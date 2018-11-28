import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boleta } from './boleta';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BoletaDetail } from './boleta-detail';

const API_URL = environment.apiURL;
const boletas = '/boletas';

/**
 * El proveedor de servicios para todo lo relacionado con boletas
 */
@Injectable()
export class BoletaService {
    
    /**
    * Constructor del servicio
    * @param http El HttpClient - TEs necesario para ejecutar las peticiones
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Retorna el objeto Observable con los detalles de una boleta traido desde el API
    * @returns Los detalles de la boleta
    */
    getBoletaDetail(boletaId): Observable<BoletaDetail> {
        return this.http.get<BoletaDetail>(API_URL + boletas + '/' + boletaId);
    }
  
    /**
    * Retorna el objeto observanle que contiene la lista de boletas traido desde el API
    * @returns La lista de boletas en tiempo real
    */
    getBoletas() : Observable<Boleta[]> {
        return this.http.get<Boleta[]>(API_URL + boletas);
    }
    
    /**
    * Crea una nueva boleta
    * @param boleta La nueva boleta
    * @returns La boleta con su nuevo id si fue creada, false si no.
    */
    createBoleta(boleta): Observable<Boleta> {
        return this.http.post<Boleta>(API_URL + boletas, boleta);
    }
    
    /**
     * Actualiza una boleta con la informacion recibida
     * @param boleta La boleta a editar
     */
    updateBoleta(boleta):Observable<BoletaDetail>{
        return this.http.put<BoletaDetail>(API_URL+boletas + '/'+boleta.id,boleta);
    }
}
