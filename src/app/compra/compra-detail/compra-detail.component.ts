import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router , NavigationEnd } from '@angular/router';

import { CompraService } from '../compra.service';

import { CompraDetail } from '../compra-detail';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-compra-detail',
  templateUrl: './compra-detail.component.html',
  styleUrls: ['./compra-detail.component.css']
})
export class CompraDetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private compraService: CompraService,
        private router:Router 
    ) { }

     @Input() compraDetail: CompraDetail;
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
        if (this.compra_id){
            this.compraDetail = new CompraDetail();
            this.getCompraDetail();
        }
     
            }
}



