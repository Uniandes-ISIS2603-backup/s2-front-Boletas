import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ComentarioDetail } from './comentario-detail';

const API_URL = environment.apiURL;
const comentarios = '/comentarios';

@Injectable()
export class ComentarioService {
    
    constructor(private http: HttpClient) { }
    
     getComentarioDetail(comentarioId): Observable<ComentarioDetail> {
        return this.http.get<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId);
    }
  
    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
    }
    
}



