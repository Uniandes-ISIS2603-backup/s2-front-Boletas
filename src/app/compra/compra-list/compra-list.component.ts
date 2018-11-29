import {Component, OnInit, ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Compra } from '../compra';
import { CompraService } from '../compra.service';
import {CompraDetail} from '../compra-detail';



@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})

export class CompraListComponent implements OnInit {
    constructor(private compraService: CompraService,
    private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { } 
    @ Input() compras: Compra[];
    compra_id: number;
    selectedCompra : Compra;
    showCreate: boolean;
    showEdit: boolean;
    compra_edit_id: number;
    
    onSelected(compra_id: number):void {
        this.showCreate = false;
        this.compra_id = compra_id;
        this.selectedCompra = new CompraDetail();
        this.getCompraDetail();        
    }
    showHideEdit(compra_id: number): void {
        if (!this.showEdit || (this.showEdit && compra_id != this.compra_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.compra_edit_id = compra_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateCompra(): void {
        this.showEdit = false;
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

    deleteCompra(compraId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Borrar una compra',
            childComponent: SimpleModalComponent,
            data: {text: '¿Esta seguro de que quiere cambiar el estado de esta compra?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.compraService.deleteCompra(compraId).subscribe(() => {
                            this.modalDialogService.openDialog(this.viewRef,{title:'compra eliminada', childComponent: SimpleModalComponent, data: {text:'Se cambio\n\
el estado de la compra'}, actionButtons:[{text:'ok', onAction: () => true}]});
                            this.toastrService.error("Se cambio el estado de la compra", "Compra deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
    
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.selectedCompra = undefined;
        this.compra_id= undefined;
        this.getCompras();   
    }
}