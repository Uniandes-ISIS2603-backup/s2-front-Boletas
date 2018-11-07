import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletaListComponent } from './boleta-list/boleta-list.component';
import { BoletaService } from './boleta.service';
import { FormsModule } from '@angular/forms';
import { BoletaDetailComponent } from './boleta-detail/boleta-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BoletaCreateComponent } from './boleta-create/boleta-create.component';

@NgModule({
  imports: [
    BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [BoletaListComponent, BoletaDetailComponent, BoletaCreateComponent],
  providers: [BoletaService],
  exports: [BoletaListComponent]
})
export class BoletaModule { }
