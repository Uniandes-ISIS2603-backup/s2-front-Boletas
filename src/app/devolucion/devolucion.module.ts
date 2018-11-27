import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from '../routing.module';


import { DevolucionService } from './devolucion.service';
import { DevolucionDetailComponent } from './devolucion-detail/devolucion-detail.component';
import { DevolucionCreateComponent } from './devolucion-create/devolucion-create.component';
import { DevolucionListComponent } from './devolucion-list/devolucion-list.component';

@NgModule({
    imports: [       
        BrowserModule,
        HttpClientModule,
        CommonModule,
        RoutingModule,
        FormsModule
    ],
    declarations: [ DevolucionDetailComponent, DevolucionCreateComponent, DevolucionListComponent],
    providers: [DevolucionService],
    exports:[DevolucionDetailComponent]
})
export class DevolucionModule { }
