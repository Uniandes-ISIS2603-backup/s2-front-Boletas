import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ComentarioDetail } from './comentario-detail';

const API_URL = environment.apiURL;
const comentarios = '/comentarios';

/**
 * El proveedor de servicios para todo lo relacionado con comentarios
 */
@Injectable()
export class ComentarioService {
    
    /**
    * Constructor del servicio
    * @param http El HttpClient - TEs necesario para ejecutar las peticiones
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Retorna el objeto Observable con los detalles de un comentario traido desde el API
    * @returns Los detalles del comentario
    */
    getComentarioDetail(comentarioId): Observable<ComentarioDetail> {
        return this.http.get<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId);
    }
  
    /**
    * Retorna el objeto observanle que contiene la lista de comentarios traido desde el API
    * @returns La lista de comentarios en tiempo real
    */
    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
    }
    
    /**
    * Crea un nuevo comentario
    * @param comentario El nuevo comentario
    * @returns LEl comentario con su nievo id si fue creado, false si no.
    */
    createComentario(comentario): Observable<Comentario> {
        return this.http.post<Comentario>(API_URL + comentarios, comentario);
    }
    
    updateComentario(comentario): Observable<ComentarioDetail> {
        return this.http.put<ComentarioDetail>(API_URL + comentarios + '/' + comentario.id, comentario);
    }
    
    deleteComentario(comentarioId): Observable<ComentarioDetail> {
        return this.http.delete<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId);
    }
    
}



