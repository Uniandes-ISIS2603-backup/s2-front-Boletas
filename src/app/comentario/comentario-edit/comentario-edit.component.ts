import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Subject, merge} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {ComentarioService} from '../comentario.service';
import {ComentarioDetail} from '../comentario-detail';


@Component({
  selector: 'app-comentario-edit',
  templateUrl: './comentario-edit.component.html',
  styleUrls: ['./comentario-edit.component.css']
})
export class ComentarioEditComponent implements OnInit {

  constructor( private comentarioService: ComentarioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute) { }
   
  model: any;
    /**
    * El comentario que será actualizado
    */
    comentario: ComentarioDetail;

    @Input() comentario_id: number;
    
    
    
   
    
    
    getComentario(): void {
        this.comentarioService.getComentarioDetail(this.comentario_id).subscribe(comentario => {
            
            this.comentario = comentario;
        });
    }
    
    cancelEdition(): void {
        this.toastrService.warning('El comentario no fue editado', 'Comentario edition');
        this.router.navigate(['/comentarios/list']);
    }
    
    
    
    updateComentario(): void {
        
        this.comentarioService.updateComentario(this.comentario)
            .subscribe(() => {
                this.router.navigate(['/comentarios/' + this.comentario.id]);
                this.toastrService.success("El comentario fue editado", 'Comentario edition');
            });
    }

  ngOnInit() {
      this.comentario = new ComentarioDetail();
        this.getComentario();
  }

}
