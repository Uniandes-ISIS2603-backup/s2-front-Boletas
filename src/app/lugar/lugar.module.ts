import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LugarListComponent], 
  exports:[LugarListComponent]
})
export class LugarModule { }
