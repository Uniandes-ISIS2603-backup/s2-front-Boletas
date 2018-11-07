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
    
    boleta_id:number;
    selectedBoleta: Boleta;
    showCreate: boolean;
    constructor(private boletaService: BoletaService) { }
    @Input() boletas: Boleta[];

        onSelected(boleta_id: number):void {
        this.boleta_id = boleta_id;
        this.selectedBoleta = new BoletaDetail();
        this.getBoletaDetail();        
    }
    
        /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedBoleta) {
            this.selectedBoleta = undefined;
            this.boleta_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
    getBoletaDetail(): void {
        this.boletaService.getBoletaDetail(this.boleta_id)
            .subscribe(selectedBoleta => {
                this.selectedBoleta = selectedBoleta
            });
    }
  getBoletas(): void{
      this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
  }
  ngOnInit() {
      this.getBoletas();
      this.showCreate = false;
      this.selectedBoleta = undefined;
      this.boleta_id = undefined;
       
  }

}
