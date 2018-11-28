import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import { ComentarioDetail } from '../comentario-detail';
import {EspectaculoService} from 'src/app/espectaculo/espectaculo.service';
import {EspectaculoDetail} from 'src/app/espectaculo/espectaculo-detail';
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
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
    constructor(private comentarioService: ComentarioService, private route:ActivatedRoute,
    private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
    
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
    
    showEdit: boolean;
    comentario_edit_id: number;
    
    
    /**
    * La lista de comentarios a desplegar
    */
    @Input() comentarios: Comentario[];

    allComentario:string = 'no';
    espectaculo: number;
    
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
    showHideEdit(comentario_id: number): void {
        if (!this.showEdit || (this.showEdit && comentario_id != this.comentario_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.comentario_edit_id = comentario_id;
        }
        else {
            this.showEdit = false;
        }
    }
    
    updateComentario(): void {
        this.showEdit = false;
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
  
    getEspectaculo():number{
        return this.espectaculo;
    }
    /**
     * Pide al servicio actualizar la lista de comentarios
     */
    getComentarios(): void{
      this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
    }
    
        deleteComentario(comentarioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar un comentario',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de que quiere borrar el comentario?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.comentarioService.deleteComentario(comentarioId).subscribe(() => {
                            this.modalDialogService.openDialog(this.viewRef,{title:'comentario eliminada', childComponent: SimpleModalComponent, data: {text:'Se elimino\n\
el comentario'}, actionButtons:[{text:'ok', onAction: () => true}]});
                            this.toastrService.error("Se elimino el comentario", "Comentario deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
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
        else
        {
            console.log(this.route.snapshot.params.id);
            this.espectaculo = this.route.snapshot.params.id;
            console.log(this.espectaculo);
            
        }
        this.showCreate = false;
        this.selectedComentario = undefined;
        this.comentario_id = undefined;
    }

}
