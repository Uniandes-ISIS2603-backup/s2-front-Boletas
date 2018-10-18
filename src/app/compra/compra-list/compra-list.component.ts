import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';


@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})

export class CompraListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param compraService The author's services provider
     */
    constructor(private compraService: CompraService) { }
    
    /**
     * The list of compras
     */
    compras: Compra[];

    /**
     * Asks the service to update the list of compras
     */
    getCompras(): void {
        this.compraService.getCompras().subscribe(compras => this.compras = compras);
    }

    /**
     * This will initialize the component by retrieving the list of compras from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCompras();
    }
}
