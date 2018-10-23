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
export class ComentarioDetailComponent implements OnInit {

@Input() comentarioDetail: ComentarioDetail;

    constructor(
        private route: ActivatedRoute,
        private comentarioService: ComentarioService 
    ) { }
    comentario_id:number;
    getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(comentarioDetail => {
                this.comentarioDetail = comentarioDetail
            });
    }

  ngOnInit() {
      console.log(this.comentario_id);
        this.comentario_id = +this.route.snapshot.paramMap.get('id');
        this.getComentarioDetail();
  }

}
