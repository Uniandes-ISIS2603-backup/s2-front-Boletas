import { Component, OnInit, Input } from '@angular/core';
import {Espectaculo} from '../espectaculo';
import {EspectaculoService} from '../espectaculo.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

/**
 * El componente de la lista de espectaculos
 * @author Sebastian Rodriguez
 */
@Component({
  selector: 'app-espectaculo-list',
  templateUrl: './espectaculo-list.component.html',
  styleUrls: ['./espectaculo-list.component.css']
})
export class EspectaculoListComponent implements OnInit {

/**
 * Constructor del componente de listar espectaculos
 * @param EspectaculoService el proveedor de servicios de espectaculo
 */
  constructor(private espectaculoService: EspectaculoService ,private route: ActivatedRoute) { }

/**
 * Lista de espectaculos 
 */
@Input() espectaculos: Espectaculo[];
  
  showCreate:boolean;
  
  allEspectaculo: string = 'no';
  
  /**
   * Metodo para el caso que se quiera crear un espectaculo, se muestra el componente o no
   */
  showHCreate():void{
      this.showCreate = !this.showCreate;
  }
  
  /**
   * Llama al servicio, invocando su funcion de getEspectaculos() pidiendo los espectaculos
   */
  getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      
  }


    /**
     * Metodo que se invoca al crear el componente, llama al servicio por los espectaculos
     * que hay en el proyecto
     */
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
  }

}
