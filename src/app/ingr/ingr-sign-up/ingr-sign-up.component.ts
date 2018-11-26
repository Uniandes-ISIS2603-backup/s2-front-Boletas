import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { Router} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {User} from '../user';
import {IngrService} from '../ingr.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingr-sign-up',
  templateUrl: './ingr-sign-up.component.html',
  styleUrls: ['./ingr-sign-up.component.css']
})
export class IngrSignUpComponent implements OnInit {

  constructor(private toastrService:ToastrService, private ingrService:IngrService, private modalDialog:ModalDialogService,private viewRef: ViewContainerRef, private router:Router) { }

  user : User;
  roles: String[];

  rolT: boolean;

  ngOnInit() {
    this.user = new User();
    this.roles = ['Organizador', 'Client'];
    this.abrirDialogo();
    this.tipo();
    this.ingrService.registrarse(this.user.role);
  }

  tipo():void{
    if(this.user.role == 'Organizador'){this.rolT= true}
    else {this.rolT = false;}
  }

  abrirDialogo(): void {
    this.modalDialog.openDialog(this.viewRef, {
        title: 'Registrarse',
        childComponent: SimpleModalComponent,
        data: {text: 'Elija su tipo de usuario'},
        actionButtons: [
            {
                text: 'Organizador',
                buttonClass: 'btn btn-dark',
                onAction: () => {
                  this.user.role = 'Organizador';
                  this.router.navigate(['/organizadores/create']);
                  return true;
                }
            },
            {text: 'Cliente', buttonClass: 'btn btn-info',
            onAction: () => {
              this.user.role = 'Client';
              this.router.navigate(['/clientes/create']);
              return true;
            }}
        ]
    });
}

}
