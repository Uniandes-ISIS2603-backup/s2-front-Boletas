import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import { BrowserModule } from '@angular/platform-browser';
import {OrganizadorListComponent} from './organizador-list/organizador-list.component'
import {OrganizadorDetailComponent} from './organizador-detail/organizador-detail.component';
import {OrganizadorCreateComponent} from './organizador-create/organizador-create.component';
import {OrganizadorEditComponent} from './organizador-edit/organizador-edit.component';

import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';

import {OrganizadorService} from './organizador.service';
import {FormsModule} from '@angular/forms';

import {EspectaculoModule} from '../espectaculo/espectaculo.module';


@NgModule({
    imports : [CommonModule,FormsModule, RoutingModule, HttpClientModule, BrowserModule, EspectaculoModule],
    declarations: [OrganizadorListComponent, OrganizadorDetailComponent, OrganizadorCreateComponent, OrganizadorEditComponent],
    providers: [OrganizadorService],
    exports: [OrganizadorListComponent, OrganizadorEditComponent]
})

export class OrganizadorModule{
}