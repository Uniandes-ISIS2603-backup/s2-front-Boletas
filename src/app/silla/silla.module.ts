import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillaListComponent } from './silla-list/silla-list.component';

import { SillaService } from './silla.service';
import { FormsModule } from '@angular/forms';
import { SillaDetailComponent } from './silla-detail/silla-detail.component';
import { BoletaModule } from '../boleta/boleta.module';
import { SillaCreateComponent } from './silla-create/silla-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    BoletaModule
  ],
  declarations: [SillaListComponent, SillaDetailComponent, SillaCreateComponent],
  providers: [SillaService],
  exports:[SillaListComponent]
})
export class SillaModule { }
