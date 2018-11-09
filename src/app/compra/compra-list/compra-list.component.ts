import { Component, OnInit, Input } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';
import {CompraDetail} from '../compra-detail';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})

export class CompraListComponent implements OnInit {
    constructor(private compraService: CompraService, private route:ActivatedRoute) { } 
    @ Input() compras: Compra[];
    compra_id: number;
    selectedCompra : Compra;
    showCreate: boolean;
    allCompra:string= 'no';
    
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

        this.route.queryParams
      .filter(params => params.allCompra)
      .subscribe(params => {
        console.log(params); 

        this.allCompra = params.allCompra;
        console.log(this.allCompra); 
      });
      if (this.allCompra == 'yes'){
          console.log("allCompra");
      
          this.getCompras();
       }
        
    }
}