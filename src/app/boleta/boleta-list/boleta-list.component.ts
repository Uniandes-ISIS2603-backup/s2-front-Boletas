import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import { BoletaDetail } from '../boleta-detail';
import { ActivatedRoute } from '@angular/router';
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
    constructor(private boletaService: BoletaService) { }
    
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
    showHideCreate(): void {
        if (this.selectedBoleta) {
            this.selectedBoleta = undefined;
            this.boleta_id = undefined;
        }
        this.showCreate = !this.showCreate;
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
       
    }

}
