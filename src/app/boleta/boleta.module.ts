import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletaListComponent } from './boleta-list/boleta-list.component';
import { BoletaService } from './boleta.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoletaListComponent],
  providers: [BoletaService],
  exports: [BoletaListComponent]
})
export class BoletaModule { }
