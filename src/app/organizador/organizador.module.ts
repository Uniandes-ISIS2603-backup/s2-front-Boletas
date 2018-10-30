import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import {OrganizadorListComponent} from './organizador-list/organizador-list.component'
import {OrganizadorDetailComponent} from './organizador-detail/organizador-detail.component';
import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';

import {OrganizadorService} from './organizador.service'
import {FormsModule} from '@angular/forms'

@NgModule({
    imports : [CommonModule,FormsModule, RoutingModule, HttpClientModule],
    declarations:[OrganizadorListComponent, OrganizadorDetailComponent],
    providers: [OrganizadorService],
    exports: [OrganizadorListComponent]
})

export class OrganizadorModule{
}