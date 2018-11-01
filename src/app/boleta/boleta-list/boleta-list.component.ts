import { Component, OnInit, Input } from '@angular/core';
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

<<<<<<< HEAD
  constructor(private boletaService: BoletaService, private route: ActivatedRoute) { }
  boletas: Boleta[];
=======
    

  constructor(private boletaService: BoletaService) { }
 @Input() boletas: Boleta[];
>>>>>>> 99a749c425b68480ff20653dd8f61d00c8b452dd
  getBoletas(): void{
      this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
  }
  ngOnInit() {
      this.getBoletas();
  }

}
