import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';

import {LugarService} from './lugar.service';
import {FormsModule} from '@angular/forms';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import { LugarCreateComponent } from './lugar-create/lugar-create.component';
import {LugarEditComponent} from './lugar-edit/lugar-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { HttpClientModule } from '@angular/common/http';

import { SillaModule } from '../silla/silla.module';
import {RoutingModule} from '../routing.module';
import {EspectaculoModule} from '../espectaculo/espectaculo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    SillaModule,
    HttpClientModule,
    RoutingModule,
    EspectaculoModule,
    BrowserModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [LugarListComponent, LugarDetailComponent, LugarCreateComponent, LugarEditComponent],
  providers: [LugarService], 
  exports:[LugarListComponent]
})
export class LugarModule { }
