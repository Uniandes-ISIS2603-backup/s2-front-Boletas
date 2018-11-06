import {Injectable} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Cliente} from './cliente';
import {Observable} from 'rxjs'
import {ClienteDetail} from './cliente-detail'

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes="/clientes";


/**
*El proveedor de servicios para todo lo relacionado con cliente
**/
@Injectable({
    providedIn: 'root'
})
export class ClienteService
{
            /**
    * Constructor del servicio
    * @param http The HttpClient - Se necesita para hacer request 
    */
    constructor(private http: HttpClient)
    {
        
    }
    
          /**
    * Retorna un objeto  Observable que contiene la lista de clientes que vienen del API
    * @returns La lista de clientes en tiempo real 
    */
    getClientes(): Observable <Cliente[]>
    {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }
    
            /**
    *Retorna un objeto  Observable que contiene el detalle de un cliente que viene del API
    * @returns  Los detalles del cliente
    **/
    getClienteDetail(clienteId): Observable <ClienteDetail>{
       
         return this.http.get<ClienteDetail>(API_URL + clientes+'/'+ clienteId); 
    }
    
        /**
    * Crea un nuevo cliente
    * @param cliente El nuevo cliente
    * @returns la confirmacion de que el cliente fue creado
    */
    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

}
