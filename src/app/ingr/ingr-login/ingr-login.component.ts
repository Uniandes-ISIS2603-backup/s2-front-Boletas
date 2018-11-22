import { Component, OnInit } from '@angular/core';

import {User} from '../user';
import {IngrService} from '../ingr.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ingr-login',
  templateUrl: './ingr-login.component.html',
  styleUrls: ['./ingr-login.component.css']
})
export class IngrLoginComponent implements OnInit {

  constructor(private toastrService:ToastrService, private ingrService:IngrService) { }

  user:User;

  roles: String[];

  login(): void {
    this.ingrService.login(this.user.role);
    this.toastrService.success('Logged in')
  }

  ngOnInit() {
    this.user = new User();
    this.roles = ['Administrator', 'Client'];
  }

}
