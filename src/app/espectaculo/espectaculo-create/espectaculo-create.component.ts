import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import {EspectaculoService} from '../espectaculo.service';
import {LugarService} from 'src/app/lugar/lugar.service';
import {Espectaculo} from '../espectaculo';
import {Lugar} from 'src/app/lugar/lugar';

/**
 * Componente de crear para espectaculo
 * @author Sebastian Rodriguez
 */
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
  
  lugarService: LugarService;
  
 @Input() lugares: Lugar[]
  
  /**
   * Un output que define que el cliente no quiere hacer el proceso
   */
  @Output() cancel = new EventEmitter();
  
  /**
   * El output dice que el cliente crea el espectaculo
   */
  @Output() create = new EventEmitter();
  
  
  /**
   * Le dice al padre que no se confirma la creacion del espectaculo
   */
  cancelCreation(): void {
      
      this.cancel.emit();
  }

  /**
   * Le obtiene los lugares donde se podria realizar el espectaculo
   */
  getLugares():void
  {
      this.lugarService.getLugares().subscribe(lugares => this.lugares = lugares);
  }
  
  ngOnInit() {
      this.espectaculo = new Espectaculo();
      this.getLugares();
      
  }
  
  /**
   * Crea el espectaculo
   */
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
