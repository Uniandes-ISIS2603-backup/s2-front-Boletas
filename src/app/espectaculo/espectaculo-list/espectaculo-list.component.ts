import { Component, OnInit, Input } from '@angular/core';
import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-espectaculo-list',
  templateUrl: './espectaculo-list.component.html',
  styleUrls: ['./espectaculo-list.component.css']
})
export class EspectaculoListComponent implements OnInit {

  constructor(private espectaculoService: EspectaculoService ,private route: ActivatedRoute) { }

  @Input() espectaculos: Espectaculo[];
  
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      
  }

  ngOnInit() {
      this.getEspectaculos();
  }

}
