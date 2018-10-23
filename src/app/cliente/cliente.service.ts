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
    constructor(private http: HttpClient)
    {
        
    }
    
    getClientes(): Observable <Cliente[]>
    {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }
    
    getClienteDetail(clienteId): Observable <ClienteDetail>{
       
         return this.http.get<ClienteDetail>(API_URL + clientes+'/'+ clienteId); 
    }
    
    

}
