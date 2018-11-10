import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import { ComentarioDetail } from '../comentario-detail';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {
    
    /**
     * El constructor del componente
     */
    constructor(private comentarioService: ComentarioService, private route:ActivatedRoute) { }
    
    /**
    * El identificador del comentario que se selecciona para obtener su detail
    */
    comentario_id:number;
    
    /**
    * El comentario seleccionado
    */
    selectedComentario: Comentario;
    
    /**
    * Atributo que representa si se muestra el formulario para crear un comentario o no
    */
    showCreate: boolean;
    
    /**
    * La lista de comentarios a desplegar
    */
    @Input() comentarios: Comentario[];

    allComentario:string = 'no';
    
    /**
    * Muestra el comentario seleccionado
    */
    onSelected(comentario_id: number):void {
        this.comentario_id = comentario_id;
        this.selectedComentario = new ComentarioDetail();
        this.getComentarioDetail();        
    }
    /**
    * Muestra o esconde el componente de crear
    */
    showHideCreate(): void {
        if (this.selectedComentario) {
            this.selectedComentario = undefined;
            this.comentario_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
    /**
     * Pregunta al servicio el detail del comentario seleccionado
     */
    getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(selectedComentario => {
                this.selectedComentario = selectedComentario
            });
    }
  
    /**
     * Pide al servicio actualizar la lista de comentarios
     */
    getComentarios(): void{
      this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
    }
    
    /**
    * Inicializa el componente buscando la lista de comentarios en la base de datos
    * Este método será llamado cuando se inicializa el componente
    */
    ngOnInit() {
        this.route.queryParams
        .filter(params => params.allComentario)
        .subscribe(params => {
          console.log(params); 
  
          this.allComentario = params.allComentario;
          console.log(this.allComentario); 
        });
        if (this.allComentario == 'yes'){
            console.log("allComentario");
        
            this.getComentarios();
        }
        this.showCreate = false;
        this.selectedComentario = undefined;
        this.comentario_id = undefined;
    }

}
