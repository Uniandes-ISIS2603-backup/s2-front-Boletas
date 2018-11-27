import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

/**
 * El componente de la lista de espectaculos
 * @author Sebastian Rodriguez y Vilma Tirado
 */
@Component({
  selector: 'app-espectaculo-list',
  templateUrl: './espectaculo-list.component.html',
  styleUrls: ['./espectaculo-list.component.css']
})
export class EspectaculoListComponent implements OnInit {

/**
 * Constructor del componente de listar espectaculos
 * @param EspectaculoService el proveedor de servicios de espectaculo
 */
  constructor(private espectaculoService: EspectaculoService ,private route: ActivatedRoute,  
   private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

/**
 * Lista de espectaculos 
 */
 @Input() espectaculos: Espectaculo[];

/**
 * Muestra o ocultra el crear de un espectaculo
 */  
  showCreate:boolean;
  
  /**
*Muestra o ocultra el editar de un espectaculo 
*/
showEdit: boolean;

  allEspectaculo: string = 'no';
  
  /**
   * Metodo para el caso que se quiera crear un espectaculo, se muestra el componente o no
   */
  showHCreate():void{
      this.showCreate = !this.showCreate;
  }
  
 showHEdit():void{
        if (!this.showEdit) {
            this.showCreate = false;
            this.showEdit = true;
        }
        else { 
            this.showEdit = false;
        }
 }
  /**
   * Llama al servicio, invocando su funcion de getEspectaculos() pidiendo los espectaculos
   */
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      
  }
      /**
    * Borra un espectaculo
    */
    deleteEspectaculo(espectaculoId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar un espectaculo',
            childComponent: SimpleModalComponent,
            data: {text: 'Esta seguro que quiere eliminar este espectaculo?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.espectaculoService.deleteEspectaculo(espectaculoId).subscribe(() => {
                            this.toastrService.error("The espectaculo was successfully deleted", "espectaculo deleted");
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
     * Metodo que se invoca al crear el componente, llama al servicio por los espectaculos
     * que hay en el proyecto
     */
    ngOnInit() {
      
      this.route.queryParams
      .filter(params => params.allEspectaculo)
      .subscribe(params => {
        console.log(params); 

        this.allEspectaculo = params.allEspectaculo;
        console.log(this.allEspectaculo); 
      });
      if (this.allEspectaculo == 'yes'){
          console.log("allEspectaculos");
      
        this.getEspectaculos();
       }
      
      this.showCreate = false;
  }

}
