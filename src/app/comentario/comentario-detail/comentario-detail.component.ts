import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComentarioService } from '../comentario.service';

import { ComentarioDetail } from '../comentario-detail';
import { Comentario } from '../comentario';
@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
/**
 * Esta clase representa el componente detalle de un comentario
 */
export class ComentarioDetailComponent implements OnInit {

    /**
     * El comentario
     */
    @Input() comentarioDetail: ComentarioDetail;
    
    /**
    * El constructor del componente
    * @param route La ruta que ayuda a encontrar el identificador del comentario a ser mostrado
    * @param comentarioService El proveedor de servicios del comentario
    */
    constructor(
        private route: ActivatedRoute,
        private comentarioService: ComentarioService 
    ) { }
    
    /**
    * El id del comentario que viene en el path get .../comentarios/comentario_id   
    */
    comentario_id:number;
    
    /**
    * El método que obtiene el detalle del comentario a ser mostrado
    */
    getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(comentarioDetail => {
                this.comentarioDetail = comentarioDetail
            });
    }
    
    /**
    * El método que inicializa el componente.
    */
    ngOnInit() {
      console.log(this.comentario_id);
        this.comentario_id = +this.route.snapshot.paramMap.get('id');
        this.getComentarioDetail();
  }

}
