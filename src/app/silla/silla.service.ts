import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Silla} from './silla';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
const API_URL = '../../assets/';
const sillas = 'sillas.json';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SillaService {


  constructor(private http: HttpClient) { }
  getSillas(): Observable<Silla[]>
  {
      return this.http.get<Silla[]>(API_URL + sillas);
  }
}
