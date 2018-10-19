import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';


@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})

export class CompraListComponent implements OnInit {
    constructor(private compraService: CompraService) { } 
    compras: Compra[];
    getCompras(): void {
        this.compraService.getCompras().subscribe(compras => this.compras = compras);
    }
    ngOnInit() {
        this.getCompras();
    }
}