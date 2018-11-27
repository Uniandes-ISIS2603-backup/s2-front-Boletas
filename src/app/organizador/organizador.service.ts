import {Injectable} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Organizador} from './organizador'
import {Observable} from 'rxjs'
import {OrganizadorDetail} from './organizador-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const organizadores= '/organizadores';
/**
*El proveedor de servicios para todo lo relacionado con organizador
*@author Vilma Tirado Gomez
**/
@Injectable({
    providedIn: 'root'
})
export class OrganizadorService
{
        /**
    * Constructor del servicio
    * @param http The HttpClient - Se necesita para hacer request 
    */
    constructor(private http:HttpClient ){
        
    }
    
       /**
    * Retorna un objeto  Observable que contiene la lista de organizadores que vienen del API
    * @returns La lista de organizadores en tiempo real 
    */
    getOrganizadores(): Observable<Organizador[]>{
        return this.http.get<Organizador[]>(API_URL+organizadores);
    }
    
        /**
    *Retorna un objeto  Observable que contiene el detalle de un organizador que viene del API
    * @returns  Los detalles del organizador
    **/
    getOrganizadorDetail(organizadorId : number): Observable<OrganizadorDetail>
    {
        return this.http.get<OrganizadorDetail>(API_URL + organizadores + '/' + organizadorId);
    }
    
    
     /**
    * Crea un nuevo organizador
    * @param organizador El nuevo organizador
    * @returns la confirmacion de que el organizador fue creado
    */
    createOrganizador(organizador): Observable<Organizador> {
        return this.http.post<Organizador>(API_URL + organizadores, organizador);
    }

    /**
     * Metodo para modificar un organizador con la informacion que se le pasa por parametro
     * 
     */
    updateOrganizador(organizador) : Observable<OrganizadorDetail>
    {
        return this.http.put<OrganizadorDetail>(API_URL + organizadores + '/' + organizador.id, organizador);
    }

    deleteOrganizador(organizadorId):Observable<OrganizadorDetail>{
        return this.http.delete<OrganizadorDetail>(API_URL + organizadores +'/' + organizadorId);
    }
}
    

