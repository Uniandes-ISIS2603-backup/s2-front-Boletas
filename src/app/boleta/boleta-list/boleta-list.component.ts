import { Component, OnInit } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';

@Component({
  selector: 'app-boleta-list',
  templateUrl: './boleta-list.component.html',
  styleUrls: ['./boleta-list.component.css']
})
export class BoletaListComponent implements OnInit {

  constructor(private boletaService: BoletaService) { }
  boletas: Boleta[];
  getBoletas(): void{
      this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
  }
  ngOnInit() {
      this.getBoletas();
  }

}
