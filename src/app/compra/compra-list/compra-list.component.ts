import { Component, OnInit, Input } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';
import {CompraDetail} from '../compra-detail';



@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})

export class CompraListComponent implements OnInit {
    constructor(private compraService: CompraService) { } 
    @ Input() compras: Compra[];
    compra_id: number;
    selectedCompra : Compra;
    showCreate: boolean;
    
    onSelected(compra_id: number):void {
        this.compra_id = compra_id;
        this.selectedCompra = new CompraDetail();
        this.getCompraDetail();        
    }
    
    getCompraDetail(): void {
        this.compraService.getCompraDetail(this.compra_id)
            .subscribe(selectedCompra => {
                this.selectedCompra = selectedCompra
            });
    }
    
    showHideCreate(): void {
        if (this.selectedCompra) {
            this.selectedCompra = undefined;
            this.compra_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
    
    getCompras(): void {
        this.compraService.getCompras().subscribe(compras => this.compras = compras);
    }

    ngOnInit() {

        this.getCompras();   
    }
}