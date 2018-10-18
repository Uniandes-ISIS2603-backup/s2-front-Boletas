import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspectaculoListComponent } from './espectaculo-list/espectaculo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EspectaculoListComponent],
  exports:[EspectaculoListComponent]
})
export class EspectaculoModule { }
