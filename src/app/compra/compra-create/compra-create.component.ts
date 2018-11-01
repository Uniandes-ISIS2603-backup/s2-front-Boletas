import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CompraService} from '../compra.service';
import {ToastrService} from 'ngx-toastr';
import {Compra} from '../compra';

@Component({
  selector: 'app-compra-create',
  templateUrl: './compra-create.component.html',
  styleUrls: ['./compra-create.component.css']
})
export class CompraCreateComponent implements OnInit {
 
 constructor(
        private compraService: CompraService,
        private toastrService: ToastrService
    ) { }

    compra: Compra;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createCompra(): void {
        var compra_create = {
            envio: this.compra.envio,
            direccion: this.compra.direccion
        };
        this.compraService.createCompra(compra_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("La compra fue creada", "Compra creation");
            });
    }
    
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    ngOnInit() {
        this.compra = new Compra();
    }

}
