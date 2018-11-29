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
  espectaculos: Espectaculo[];
   
   /**
    * Lista con las imagenes de los espectaculos 
    */
    conciertos: string[];
    
     circo: string[];
     
      teatro: string[];
      
       deporte: string[];
  
    /**
   * Llama al servicio, invocando su funcion de getEspectaculos() pidiendo los espectaculos
   */
  async getEspectaculos(){
    
    this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
    await new Promise((resolve) => setTimeout(resolve,5000000));
      
  }
  
  /**
   * Añade las imagenes del espectaculo
   */
   getConciertos(list: Espectaculo[]):void{
       for (let index = 0; index < list.length; index++)
   { let con=0;
           if (list[index].tipo="Concierto")
           {
               this.conciertos[con] = list[index].imagen;
               con++;
           }
   }
   }
   esCirco(espectaculoT):boolean
   {
       if(espectaculoT === 'Circo')
       {
            return true;
       }
       return false;
   }

   esConcierto(espectaculoT):boolean
   {
       if(espectaculoT === 'Concierto')
       {
            return true;
       }
       return false;
   }

   esTeatro(espectaculoT):boolean
   {
       if(espectaculoT === 'Teatro')
       {
            return true;
       }
       return false;
   }

   esDeporte(espectaculoT):boolean
   {
       if(espectaculoT === 'Deporte')
       {
            return true;
       }
       return false;
   }
      
      getCirco():void{
       for (let index = 0; index < this.espectaculos.length; index++)
   { let con=0;
           if (this.espectaculos[index].tipo="Circo")
           {
               this.circo[con] = this.espectaculos[index].imagen;
               con++;
           }
   }
   console.log(this.circo);
   }
   
         getTeatro():void{
       for (let index = 0; index < this.espectaculos.length; index++)
   { let con=0;
           if (this.espectaculos[index].tipo="Teatro")
           {
               this.teatro[con] = this.espectaculos[index].imagen;
               con++;
           }
   }
   }
   
            getDeporte():void{
       for (let index = 0; index < this.espectaculos.length; index++)
   { let con=0;
           if (this.espectaculos[index].tipo="Deporte")
           {
               this.deporte[con] = this.espectaculos[index].imagen;
               con++;
           }
   }
   }

  async ngOnInit() {
      this.getEspectaculos();
      await new Promise((resolve) => setTimeout(resolve,5000));
      this.getConciertos(this.espectaculos);
      await new Promise((resolve) => setTimeout(resolve,5000));
      this.getCirco();
      await new Promise((resolve) => setTimeout(resolve,5000));
      this.getTeatro();
      this.getDeporte();
 
}
}
