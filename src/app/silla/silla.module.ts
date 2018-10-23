import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillaListComponent } from './silla-list/silla-list.component';

import { SillaService } from './silla.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SillaListComponent],
  providers: [SillaService],
  exports:[SillaListComponent]
})
export class SillaModule { }
