import { Component, OnInit , ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import {User} from '../user';
import {IngrService} from '../ingr.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingr-login',
  templateUrl: './ingr-login.component.html',
  styleUrls: ['./ingr-login.component.css']
})
export class IngrLoginComponent implements OnInit {

  constructor(private toastrService:ToastrService, private ingrService:IngrService, private modalDialog:ModalDialogService,private viewRef: ViewContainerRef) { }

  user:User;

  roles: String[];

  login(): void {
    this.ingrService.login(this.user.role);
    this.toastrService.success('Logged in')
  }

  ngOnInit() {
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


}
