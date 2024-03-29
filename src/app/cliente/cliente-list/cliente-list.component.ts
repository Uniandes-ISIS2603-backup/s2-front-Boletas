import {Component, OnInit} from '@angular/core';
import {Cliente}from '../cliente';
import {ClienteService} from '../cliente.service';
import{ClienteDetail} from '../cliente-detail';

/**
 * El componente para la lista de clientes 
 */
 
 @Component({
     selector: 'app-cliente',
     templateUrl: './cliente-list.component.html',
     styleUrls:['./cliente-list.component.css']
 })
 
 export class ClienteListComponent implements OnInit{
     /**
      * constructor del componente
      * @param: clienteService proveedor de servicios 
      */
     constructor (private clienteService: ClienteService ){}
 
 
    /**
    *Lista de los clientes de la pagina 
    **/
    clientes: Cliente[];
    /**
    * Muestra o oculta el componente crear
    */
    showCreate: boolean;
    
    /**
    *El id del cliente que se quiere ver
    **/
    cliente_id:number;

    /**
    * El cliente seleccionado por el usuario
    */
    selectedCliente: Cliente

    onSelected (cliente_id: number): void{
        this.showCreate = false;
        this.cliente_id = cliente_id;
        this.selectedCliente= new ClienteDetail();
        this.getClienteDetail();    
    }

    /**    
    *Le pide al servicio que actualice la lista de clientes 
    **/
    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => {this.clientes= clientes;});
    }

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(selectedCliente => {
                this.selectedCliente = selectedCliente
            });
    }
     
    /**
    * Muestra o oculta el componente crear
    */
    showHideCreate(): void {
        
        this.showCreate = !this.showCreate;
    }

    /**
    *Esto inicializa la lista cuando se crea el componente 
    *Este metodo se llama cuando se crea el compoente
    **/
    ngOnInit()
    {
        this.showCreate = false;
        this.selectedCliente = undefined;
        this.cliente_id= undefined;
        this.getClientes();
    }
}