import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';

import {LugarService} from './lugar.service';
import {FormsModule} from '@angular/forms';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import { LugarCreateComponent } from './lugar-create/lugar-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LugarListComponent, LugarDetailComponent, LugarCreateComponent],
  providers: [LugarService], 
  exports:[LugarListComponent]
})
export class LugarModule { }
