import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,  NavigationEnd } from '@angular/router';

import { BoletaService } from '../boleta.service';

import { BoletaDetail } from '../boleta-detail';
import { Boleta } from '../boleta';
@Component({
  selector: 'app-boleta-detail',
  templateUrl: './boleta-detail.component.html',
  styleUrls: ['./boleta-detail.component.css']
})
/**
 * Esta clase representa el componente detalle de una boleta
 */
export class BoletaDetailComponent implements OnInit {

    /**
     * La boleta 
     */
    @Input() boletaDetail: BoletaDetail;
    
    /**
    * El constructor del componente
    * @param route La ruta que ayuda a encontrar el identificador de la boleta a ser mostrada
    * @param boletaService El proveedor de servicios de la boleta
    */
    constructor(
        private route: ActivatedRoute,
        private boletaService: BoletaService,
         
    ) { }
    
    /**
    * El id de la boleta que viene en el path get .../boleta/coleta_id
    */
    boleta_id:number;
    
    /**
    * El método que obtiene el detalle de la boleta a ser mostrada
    */
    getBoletaDetail(): void {
        this.boletaService.getBoletaDetail(this.boleta_id)
            .subscribe(boletaDetail => {
                this.boletaDetail = boletaDetail
            });
    }
    
    /**
    * El método que inicializa el componente.
    */
    ngOnInit() {
      console.log(this.boleta_id);
        this.boleta_id = +this.route.snapshot.paramMap.get('id');
        if (this.boleta_id){
            this.boletaDetail = new BoletaDetail();
            this.getBoletaDetail();
        }
  }

}
