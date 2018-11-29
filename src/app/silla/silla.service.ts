import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Silla} from './silla';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';


import {SillaDetail} from './silla-detail';

import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const sillas = '/sillas';



@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SillaService {

    private sillas = new BehaviorSubject(Silla[1]);

  constructor(private http: HttpClient) { }
  getSillas(): Observable<Silla[]>
  {
      return this.http.get<Silla[]>(API_URL + sillas);
  }
  
  getSillaDetail(sillaId):Observable<SillaDetail>
  {
      return this.http.get<SillaDetail>(API_URL + sillas + "/" + sillaId)
  }
  
  createSilla(silla): Observable<Silla>
  {
      return this.http.post<Silla>(API_URL + sillas, silla)
  }

  s = this.sillas.asObservable();

  cambiarSillas(sillas)
  {
    this.sillas.next(sillas);
  }
}
