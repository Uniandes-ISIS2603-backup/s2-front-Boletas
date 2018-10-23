import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspectaculoListComponent } from './espectaculo-list/espectaculo-list.component';
import { EspectaculoDetailComponent } from './espectaculo-detail/espectaculo-detail.component';
import { AppRouting} from '../app/routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [EspectaculoListComponent, EspectaculoDetailComponent],
  exports:[EspectaculoListComponent]
})
export class EspectaculoModule { }
