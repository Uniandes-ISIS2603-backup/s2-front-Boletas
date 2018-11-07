import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillaListComponent } from './silla-list/silla-list.component';

import { SillaService } from './silla.service';
import { FormsModule } from '@angular/forms';
import { SillaDetailComponent } from './silla-detail/silla-detail.component';
import { BoletaModule } from '../boleta/boleta.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    BoletaModule
  ],
  declarations: [SillaListComponent, SillaDetailComponent],
  providers: [SillaService],
  exports:[SillaListComponent]
})
export class SillaModule { }
