import { Component, OnInit, Input } from '@angular/core';
import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-espectaculo-list',
  templateUrl: './espectaculo-list.component.html',
  styleUrls: ['./espectaculo-list.component.css']
})
export class EspectaculoListComponent implements OnInit {

  constructor(private espectaculoService: EspectaculoService ,private route: ActivatedRoute) { }

  @Input() espectaculos: Espectaculo[];
  
  showCreate:boolean;
  
  allEspectaculo: string = 'no';
  
  showHCreate():void{
      this.showCreate = !this.showCreate;
  }
  
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      
  }

  ngOnInit() {
      
      this.route.queryParams
      .filter(params => params.allEspectaculo)
      .subscribe(params => {
        console.log(params); 

        this.allEspectaculo = params.allEspectaculo;
        console.log(this.allEspectaculo); 
      });
      if (this.allEspectaculo == 'yes'){
          console.log("allEspectaculos");
      
       this.getEspectaculos();
       }
      
      this.showCreate = false;
      this.getEspectaculos();
  }

}
