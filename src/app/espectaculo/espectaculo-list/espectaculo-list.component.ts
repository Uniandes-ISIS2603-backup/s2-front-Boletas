import { Component, OnInit } from '@angular/core';
import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';


@Component({
  selector: 'app-espectaculo-list',
  templateUrl: './espectaculo-list.component.html',
  styleUrls: ['./espectaculo-list.component.css']
})
export class EspectaculoListComponent implements OnInit {

  constructor(private espectaculoService: EspectaculoService) { }

  espectaculos: Espectaculo[];
  
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      
  }

  ngOnInit() {
      this.getEspectaculos();
  }

}
