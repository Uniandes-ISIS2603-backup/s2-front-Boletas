import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngrLoginComponent } from './ingr-login/ingr-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RoutingModule} from '../routing.module';
import {IngrService} from './ingr.service';
import { BrowserModule } from '@angular/platform-browser';
import { IngrSignUpComponent } from './ingr-sign-up/ingr-sign-up.component';
import {OrganizadorModule} from '../organizador/organizador.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RoutingModule,
    OrganizadorModule
  ],
  declarations: [IngrLoginComponent, IngrSignUpComponent],
  providers:[IngrService],
  bootstrap: [IngrLoginComponent]
})
export class IngrModule { }
