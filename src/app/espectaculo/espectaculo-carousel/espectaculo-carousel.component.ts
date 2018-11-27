import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';

@Component({
  selector: 'app-espectaculo-carousel',
  templateUrl: './espectaculo-carousel.component.html',
  styleUrls: ['./espectaculo-carousel.component.css']
})
export class EspectaculoCarouselComponent implements OnInit {

  constructor(private espectaculoService: EspectaculoService, private route :ActivatedRoute) { 
    
  }
  
  /**
   * Lista de espectaculos
   */
   @Input() espectaculos: Espectaculo[];
   
   /**
    * Lista con las imagenes de los espectaculos 
    */
    imagenes: string[];
  
    /**
   * Llama al servicio, invocando su funcion de getEspectaculos() pidiendo los espectaculos
   */
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
  }
  
  /**
   * Añade las imagenes del espectaculo
   */
setImages():void{
    for (let index=0; index< this.espectaculos.length; index ++ )
    {
        this.imagenes[index] = this.espectaculos[index].imagen;
    }
}
  ngOnInit() {
      this.getEspectaculos();
      this.setImages();
      
  }

}
