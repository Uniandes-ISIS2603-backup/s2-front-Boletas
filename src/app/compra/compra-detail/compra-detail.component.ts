import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompraService } from '../compra.service';

import { CompraDetail } from '../compra-detail';
import { Compra } from '../compra';


@Component({
  selector: 'app-compra-detail',
  templateUrl: './compra-detail.component.html',
  styleUrls: ['./compra-detail.component.css']
})
export class CompraDetailComponent implements OnInit {

    @Input() compraDetail: CompraDetail;

    constructor(
        private route: ActivatedRoute,
        private compraService: CompraService 
    ) { }


    compra_id: number;
    
    getCompraDetail(): void {
        this.compraService.getCompraDetail(this.compra_id)
            .subscribe(compraDetail => {
                this.compraDetail = compraDetail
            });
    }
    
    ngOnInit() {
        console.log(this.compra_id);
        this.compra_id = +this.route.snapshot.paramMap.get('id');
        this.getCompraDetail();
            }
}


