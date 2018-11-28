import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from '../routing.module';

import { CompraListComponent } from './compra-list/compra-list.component';
import { CompraService } from './compra.service';

import { CompraDetailComponent } from './compra-detail/compra-detail.component';
import { CompraCreateComponent } from './compra-create/compra-create.component';
import {BoletaModule} from '../boleta/boleta.module';
<<<<<<< HEAD
import { CompraBoletasComponent } from './compra-boletas/compra-boletas.component';
=======
import { CompraEditComponent } from './compra-edit/compra-edit.component';
>>>>>>> origin/master

@NgModule({
    imports: [       
        BrowserModule,
        HttpClientModule,
        CommonModule,
        RoutingModule,
        FormsModule,
        BoletaModule
    ],
<<<<<<< HEAD
    declarations: [CompraListComponent, CompraDetailComponent, CompraCreateComponent, CompraBoletasComponent],
=======
    declarations: [CompraListComponent, CompraDetailComponent, CompraCreateComponent, CompraEditComponent],
>>>>>>> origin/master
    providers: [CompraService],
    exports:[CompraListComponent]
})
export class CompraModule {}