import { Component, OnInit , ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {User} from '../user';
import {IngrService} from '../ingr.service';
import {OrganizadorService} from '../../organizador/organizador.service';
import {Organizador} from '../../organizador/organizador';

import {ClienteService} from '../../cliente/cliente.service';
import {Cliente} from '../../cliente/cliente';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingr-login',
  templateUrl: './ingr-login.component.html',
  styleUrls: ['./ingr-login.component.css']
})
export class IngrLoginComponent implements OnInit {

  constructor(private toastrService:ToastrService, private ingrService:IngrService, private modalDialog:ModalDialogService,private viewRef: ViewContainerRef,
  private organizadorService: OrganizadorService, private clienteService:ClienteService) { }

  user:User;

  roles: String[];

  organizadores : Organizador[];

  clientes: Cliente[];

  encontrado:boolean;

  volver:boolean;

  login(): void {
    this.encontrado = false;
    if(this.user.role == "Organizador")
    {
      for(let item of this.organizadores)
      {
        if(item.usuario == this.user.name)
        {
          this.encontrado = true;
        }
      }
    }
    else {
      for(let item of this.clientes)
      {
        if(item.usuario == this.user.name)
        {
          this.encontrado = true;
        }
      }
    }
    if(this.encontrado)
    {
      this.ingrService.login(this.user.role);
      this.toastrService.success('Logged in');
    }
    else 
    {
      this.volver = true;
      this.toastrService.error('No se ha encontrado el usuario');
    }
  }

  ngOnInit() {
    this.volver = false;
    this.getOrganizadores();
    this.getClientes();
    this.user = new User();
    this.roles = ['Organizador', 'Client'];
    this.abrirDialogo();

  }

  abrirDialogo(): void {
    this.modalDialog.openDialog(this.viewRef, {
        title: 'Usuario',
        childComponent: SimpleModalComponent,
        data: {text: 'Elija su tipo de usuario'},
        actionButtons: [
            {
                text: 'Organizador',
                buttonClass: 'btn btn-dark',
                onAction: () => {
                  this.user.role = 'Organizador';
                  return true;
                }
            },
            {text: 'Cliente', buttonClass: 'btn btn-info',
            onAction: () => {
              this.user.role = 'Client';
              return true;
            }}
        ]
    });
}

  getOrganizadores(): void {
    this.organizadorService.getOrganizadores().subscribe(organizadores => this.organizadores = organizadores);
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {this.clientes= clientes;});
  }


}
