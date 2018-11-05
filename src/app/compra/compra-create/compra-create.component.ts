import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { CompraService } from '../compra.service';

import { Compra } from '../compra';
import {Cliente} from '../../cliente/cliente';

@Component({
    selector: 'app-compra-create',
    templateUrl: './compra-create.component.html',
    styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param compraService El proveedor de servicios de compra
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private compraService: CompraService,
        private toastrService: ToastrService
    ) { }

    /**
    * La nueva compra
    */
    compra: Compra;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();
    
    /**
    * Crea una compra
    */
    crearCompra(): Compra {
        console.log(this.compra);
        let dateB: Date = new Date();
        //temporal hasta completar paso del login
        let clientePru = new Cliente();
        clientePru.id=100;
        clientePru.nombre= "Eugenius";
        clientePru.usuario= "emanhare0";
        clientePru.pago = "efectivo";
        clientePru.cedula= "Manhare";
        // temporal arriba
        
        this.compra.fecha = dateB;
        this.compra.estado = true;
        this.compra.costoTotal= 1000;
        this.compra.cliente = clientePru;
        console.log(this.compra)
        this.compraService.createCompra(this.compra)
            .subscribe((compra) => {
                this.compra = compra;
                this.create.emit();
                this.toastrService.success("La compra fue creada", "Crear Compra");
                
            });
            return this.compra;
    }

    checkBoxCompra (): boolean {
        var element = <HTMLInputElement> document.getElementById("compraEnvio");
        var isChecked = element.checked;
        return isChecked;
    }
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.compra = new Compra();
        this.compra.envio = false;
        this.compra.direccion = "";
    }

}