import {Injectable} from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Organizador} from './organizador'
import {Observable} from 'rxjs'

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
    constructor(private http:HttpClient ){
        
    }
    
    getOrganizadores(): Observable<Organizador[]>{
        return this.http.get<Organizador[]>(API_URL+organizadores);
    }
}
    

