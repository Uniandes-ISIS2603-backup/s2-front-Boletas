import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CompraListComponent } from './compra-list/compra-list.component';
import { CompraService } from './compra.service';

import { CompraDetailComponent } from './compra-detail/compra-detail.component';

@NgModule({
    imports: [       
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [CompraListComponent, CompraDetailComponent],
    providers: [CompraService],
    exports:[CompraListComponent]
})
export class CompraModule {}