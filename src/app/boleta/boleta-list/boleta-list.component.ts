import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import { BoletaDetail } from '../boleta-detail';
import { ActivatedRoute, Router , NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-boleta-list',
  templateUrl: './boleta-list.component.html',
  styleUrls: ['./boleta-list.component.css']
})
export class BoletaListComponent implements OnInit {
    
    /**
    * El constructor del componente
    */
    constructor(private boletaService: BoletaService, private router:Router) { }
    
    /**
    * El identificador de la boleta que se selecciona para obtener su detail
    */
    boleta_id:number;
    
    /**
    * La boleta seleccionada
    */
    selectedBoleta: Boleta;
    
    /**
    * Atributo que representa si se muestra el formulario para crear un comentario o no
    */
    showCreate: boolean;
    
    showEdit: boolean;
    boleta_edit_id: number;
    
    /**
     * La lista de boletas a mostrar
     */
    @Input() boletas: Boleta[];

    /**
     * Muestra la boleta seleccionada
     */
    onSelected(boleta_id: number):void {
        this.boleta_id = boleta_id;
        this.selectedBoleta = new BoletaDetail();
        this.getBoletaDetail();        
    }
    
    /**
    * Muestra o esconde el componente de crear
    */
    showHideCreate(boleta_id: number): void {
        if (!this.showEdit || (this.showEdit && boleta_id != this.boleta_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.boleta_edit_id = boleta_id;
        }
        else {
            this.showEdit = false;
        }
    }
    
     showHideEdit(): void {
        if (this.selectedBoleta) {
            this.selectedBoleta = undefined;
            this.boleta_id = undefined;
        }
        this.showEdit = !this.showEdit;
    }
     updateBoleta(): void {
        this.showEdit = false;
    }
    /**
     * Pregunta al servicio el detail de la boleta seleccionada
     */
    getBoletaDetail(): void {
        this.boletaService.getBoletaDetail(this.boleta_id)
            .subscribe(selectedBoleta => {
                this.selectedBoleta = selectedBoleta
            });
    }
    /**
     * Pide al servicio actualizar la lista de boletas
     */
    getBoletas(): void{
      this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
    }
    
    /**
    * Inicializa el componente buscando la lista de boletas en la base de datos
    * Este método será llamado cuando se inicializa el componente
    */
    ngOnInit() {
      this.getBoletas();
      this.showCreate = false;
      this.selectedBoleta = undefined;
      this.boleta_id = undefined;
      this.showEdit = false;
       
    }

}
