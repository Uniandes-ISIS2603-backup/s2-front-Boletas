import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Lugar} from './lugar';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const lugares = "lugares.json";

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }
  
  getLugares(): Observable<Lugar[]>
  {
      return this.http.get<Lugar[]>(API_URL + lugares);
  }
}
