import { Component, OnInit } from '@angular/core';
import { Boleta } from '../boleta';
import { BoletaService } from '../boleta.service';
import {BoletaDetail} from '../boleta-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boleta-list',
  templateUrl: './boleta-list.component.html',
  styleUrls: ['./boleta-list.component.css']
})
export class BoletaListComponent implements OnInit {

  constructor(private boletaService: BoletaService, private route: ActivatedRoute) { }
  boletas: Boleta[];
  getBoletas(): void{
      this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
  }
  ngOnInit() {
      this.getBoletas();
  }

}
