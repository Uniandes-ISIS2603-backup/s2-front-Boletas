import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import { ComentarioDetail } from '../comentario-detail';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  constructor(private comentarioService: ComentarioService) { }
  comentario_id:number;
    selectedComentario: Comentario;
    @Input() comentarios: Comentario[];

        onSelected(comentario_id: number):void {
        this.comentario_id = comentario_id;
        this.selectedComentario = new ComentarioDetail();
        this.getComentarioDetail();        
    }
    getComentarioDetail(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id)
            .subscribe(selectedComentario => {
                this.selectedComentario = selectedComentario
            });
    }
  
  getComentarios(): void{
      this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
  }
  ngOnInit() {
      this.getComentarios();
  }

}
