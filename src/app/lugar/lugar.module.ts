import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';

import {LugarService} from './lugar.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LugarListComponent],
  providers: [LugarService], 
  exports:[LugarListComponent]
})
export class LugarModule { }
