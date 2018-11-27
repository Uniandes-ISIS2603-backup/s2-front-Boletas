import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { DevolucionService } from '../devolucion.service';

import { Devolucion } from '../devolucion';
@Component({
  selector: 'app-devolucion-create',
  templateUrl: './devolucion-create.component.html',
  styleUrls: ['./devolucion-create.component.css']
})
export class DevolucionCreateComponent implements OnInit {

   /**
    * Constructor for the component
    * @param devolucionService El proveedor de servicios de devolucion
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private devolucionService: DevolucionService,
        private toastrService: ToastrService
    ) { }

    /**
    * La nueva devolucion
    */
    devolucion: Devolucion;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();
    
    /**
    * Crea una devolucion
    */
    crearDevolucion(): Devolucion {
        console.log(this.devolucion);
       
        console.log(this.devolucion)
        this.devolucionService.createDevolucion(this.devolucion)
            .subscribe((devolucion) => {
                this.devolucion = devolucion;
                this.create.emit();
                this.toastrService.success("La devolucion fue creada", "Crear Devolucion");
                
            });
            return this.devolucion;
    }

    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.devolucion = new Devolucion();
    }

}
