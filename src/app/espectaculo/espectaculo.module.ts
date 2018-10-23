import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspectaculoListComponent } from './espectaculo-list/espectaculo-list.component';
import { EspectaculoDetailComponent } from './espectaculo-detail/espectaculo-detail.component';
import {EspectaculoService} from './espectaculo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EspectaculoListComponent, EspectaculoDetailComponent],
  providers:[EspectaculoService],
  exports:[EspectaculoListComponent]
})
export class EspectaculoModule { }
