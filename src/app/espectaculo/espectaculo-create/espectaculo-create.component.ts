import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';

@Component({
  selector: 'app-espectaculo-create',
  templateUrl: './espectaculo-create.component.html',
  styleUrls: ['./espectaculo-create.component.css'],
  providers : [DatePipe]
})
export class EspectaculoCreateComponent implements OnInit {

  /**
   * Contructor del componente
   * @param espectaculoService El servicio de espectaculo
   */
  constructor(
      private dp: DatePipe,
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
  
  createEspectaculo(): Espectaculo {
      
      console.log(this.espectaculo);
        let dateB: Date = new Date(this.espectaculo.fecha.year, this.espectaculo.fecha.month-1, this.espectaculo.fecha.day);
        this.espectaculo.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log(this.espectaculo);
      
      this.espectaculoService.crearEspectaculo(this.espectaculo).subscribe((espectaculo) => {
          this.espectaculo = espectaculo;
          this.create.emit();
          this.toastrService.success("El espectaculo fue creado", "Creacion espectaculo")})
          
      return this.espectaculo;
  }
  

}
