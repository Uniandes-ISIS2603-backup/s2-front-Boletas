import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import { BrowserModule } from '@angular/platform-browser';
import {OrganizadorListComponent} from './organizador-list/organizador-list.component'
import {OrganizadorDetailComponent} from './organizador-detail/organizador-detail.component';
import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';

import {OrganizadorService} from './organizador.service';
import {FormsModule} from '@angular/forms';

import {EspectaculoModule} from '../espectaculo/espectaculo.module';


@NgModule({
    imports : [CommonModule,FormsModule, RoutingModule, HttpClientModule, BrowserModule, EspectaculoModule],
    declarations:[OrganizadorListComponent, OrganizadorDetailComponent],
    providers: [OrganizadorService],
    exports: [OrganizadorListComponent]
})

export class OrganizadorModule{
}