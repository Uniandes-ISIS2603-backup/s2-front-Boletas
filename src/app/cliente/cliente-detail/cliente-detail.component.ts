import { Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service'
import {ClienteDetail} from '../cliente-detail'
import {Cliente} from '../cliente'
/**
*Componente del detail de cliente
*@author Vilma Tirado Gomez
**/

@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit{
    
    @Input() clienteDetail: ClienteDetail;

   /**
*Constructor del componente
*@param: route
*@param clienteService servicio del cliente
**/
    constructor(
    private route: ActivatedRoute, private viewRef: ViewContainerRef,
    private clienteService: ClienteService, private router:Router, private modalDialog: ModalDialogService,
    private toastrService:ToastrService){}
    
    cliente_id:number;
    
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
        .subscribe(clienteDetail => {
            this.clienteDetail = clienteDetail
        });
    }
    
   /**
    *Esto inicializa la lista cuando se crea el componente 
    *Este metodo se llama cuando se crea el compoente
    **/
    ngOnInit() {
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        if (this.cliente_id){
        this.clienteDetail = new ClienteDetail();
        this.getClienteDetail();
        }
    }

    deleteCliente(): void {
        this.modalDialog.openDialog(this.viewRef, {
            title: 'Cerrar Cuenta',
            childComponent: SimpleModalComponent,
            data: {text: 'Esta seguro de borrar su cuenta?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.clienteService.deleteCliente(this.cliente_id).subscribe(cliente => {
                            this.router.navigate(['clientes/list']);
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
    
    
    
}