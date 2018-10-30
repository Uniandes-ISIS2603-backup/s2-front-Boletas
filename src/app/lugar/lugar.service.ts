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

  constructor(private http: HttpClient) { }
  
  getLugares(): Observable<Lugar[]>
  {
      return this.http.get<Lugar[]>(API_URL + lugares);
  }
  
  getLugarDetail(lugarId): Observable<LugarDetail> {
      return this.http.get<LugarDetail>(API_URL + lugares + "/"+lugarId);
  }
}
