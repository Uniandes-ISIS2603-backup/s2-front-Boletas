import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {CompraService} from '../compra.service';

import {CompraDetail} from '../compra-detail';

@Component({
  selector: 'app-compra-edit',
  templateUrl: './compra-edit.component.html',
  styleUrls: ['./compra-edit.component.css']
})
export class CompraEditComponent implements OnInit {

  constructor(private compraService: CompraService,
    
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute) { }
        
  model: any;
    /**
    * La compra que será actualizada
    */
    compra: CompraDetail;

    @Input() compra_id: number;
    
    
    
   
    
    
    getCompra(): void {
        this.compraService.getCompraDetail(this.compra_id).subscribe(compra => {
            
            this.compra = compra;
        });
    }
    
   
    
    checkBoxCompra (): boolean {
        var element = <HTMLInputElement> document.getElementById("compraEnvio");
        var isChecked = element.checked;
        return isChecked;
    }
    cancelEdition(): void {
        this.toastrService.warning('La compra no fue editada', 'Compra edition');
        this.router.navigate(['/compras/list']);
    }
    
    
    
    updateCompra(): void {
        
        this.compraService.updateCompra(this.compra)
            .subscribe(() => {
                this.router.navigate(['/compras/' + this.compra.id]);
                this.toastrService.success("La compra fue editada", 'Compra edition');
            });
    }

  ngOnInit() {
  }

}
