import { Component, OnInit, Input } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import { BoletaDetail } from '../boleta-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boleta-list',
  templateUrl: './boleta-list.component.html',
  styleUrls: ['./boleta-list.component.css']
})
export class BoletaListComponent implements OnInit {
    
    boleta_id:number;
    selectedBoleta: Boleta;
    constructor(private boletaService: BoletaService) { }
    @Input() boletas: Boleta[];

        onSelected(boleta_id: number):void {
        this.boleta_id = boleta_id;
        this.selectedBoleta = new BoletaDetail();
        this.getBoletaDetail();        
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
  }

}
