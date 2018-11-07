import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { BoletaService } from '../boleta.service';
import {Espectaculo} from 'src/app/espectaculo/espectaculo';
import {EspectaculoService} from 'src/app/espectaculo/espectaculo.service';
import {EspectaculoDetail} from 'src/app/espectaculo/espectaculo-detail';
import { Boleta } from '../boleta';

@Component({
    selector: 'app-boleta-create',
    templateUrl: './boleta-create.component.html',
    styleUrls: ['./boleta-create.component.css'],
    providers : [DatePipe]
})
export class BoletaCreateComponent implements OnInit {

    /**
    * Constructor del componente
    * @param boletaService El proveedor de servicios de la boleta
    * @param toastrService El toastr para mostrar los mensajes al usuario
    * @param espectaculoService El proveedor de servicios de espectaculo (necesario para obtener los espectaculos y mostrarlos en un selector)
    */
    constructor(
        
        private boletaService: BoletaService,
        private toastrService: ToastrService,
        private espectaculoService: EspectaculoService
        
    ) { }

    /**
     * La lista de espectaculos para escoger
     */
     @Input() espectaculos: Espectaculo[];
     
    /**
     * El identificador del espectaculo
     */
     espectaculo_id: number;
     
    
    /**
     *  El espectaculo de la boleta
     */
    @Input() espectaculoDetail: EspectaculoDetail;
    /**
    * La nueva boleta
    */
    boleta: Boleta;

    /**
    * El boton que señala que ya no se quiere crear una boleta
    */
    @Output() cancel = new EventEmitter();

    /**
    * La funcion que señala que se creó una nueva boleta
    */
    @Output() create = new EventEmitter();

    /**
       * Busca la informacion del espectaculo que se seleccionó
       */
       getEspectaculoDetail(): void {
       this.espectaculoService.getEspectaculoDetail(this.espectaculo_id)
            .subscribe(espectaculoDetail => {
                
                this.espectaculoDetail = espectaculoDetail;
                
                
            });
            ;
            
    }
    /**
    * Crea una boleta
    */
    createBoleta(): Boleta {
        this.boleta.espectaculo= new Espectaculo();
        this.boleta.espectaculo.id = this.espectaculo_id;
        this.boleta.vendida = false;
        console.log(this.boleta)
        this.boletaService.createBoleta(this.boleta)
            .subscribe((boleta) => {
                this.boleta = boleta;
                this.create.emit();
                this.toastrService.success("La boleta fue creada", "Creacion de la boleta");
            });
            return this.boleta;
    }

    /**
    * Emite la señal para decirle al componente padre que el usuario ya no quiere crear una boleta
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    /**
     * Obtiene todos los espectaculos en la base de datos
     */
     getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      }
      

    /**
    * Esta funcion inicializa el componente
    */
    ngOnInit() {
        this.boleta = new Boleta();
        this.getEspectaculos();
        
    }

}

