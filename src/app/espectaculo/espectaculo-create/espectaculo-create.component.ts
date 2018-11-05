import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';

@Component({
  selector: 'app-espectaculo-create',
  templateUrl: './espectaculo-create.component.html',
  styleUrls: ['./espectaculo-create.component.css']
})
export class EspectaculoCreateComponent implements OnInit {

  /**
   * Contructor del componente
   * @param espectaculoService El servicio de espectaculo
   */
  constructor(
  private espectaculoService : EspectaculoService,
  private toastrService: ToastrService) { }


  /**
   * El nuevo espectaculo
   */
  espectaculo : Espectaculo;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  cancelCreation(): void {
      
      this.cancel.emit();
  }

  ngOnInit() {
      this.espectaculo = new Espectaculo();
      
  }
  
  createEspectaculo(): void {
      
      var espectaculoC = {
          
          nombre: this.espectaculo.nombre,
          descripcion: this.espectaculo.descripcion,
          artista: this.espectaculo.artista,
          fecha: this.espectaculo.fecha,
          imagen: this.espectaculo.imagen,
          tipo: this.espectaculo.tipo
      };
      this.espectaculoService.crearEspectaculo(espectaculoC).subscribe(() => {this.create.emit();
          this.toastrService.success("El espectaculo fue creado", "Creacion espectaculo")})
  }
  

}
