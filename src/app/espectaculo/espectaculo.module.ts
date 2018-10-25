import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspectaculoListComponent } from './espectaculo-list/espectaculo-list.component';
import { EspectaculoDetailComponent } from './espectaculo-detail/espectaculo-detail.component';
import {EspectaculoService} from './espectaculo.service';
import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule
  ],
  declarations: [EspectaculoListComponent, EspectaculoDetailComponent],
  providers:[EspectaculoService],
  exports:[EspectaculoListComponent]
})
export class EspectaculoModule { }
