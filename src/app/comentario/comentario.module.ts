import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioService } from './comentario.service';
import { FormsModule } from '@angular/forms';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ComentarioCreateComponent } from './comentario-create/comentario-create.component';

@NgModule({
  imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [ComentarioListComponent, ComentarioDetailComponent, ComentarioCreateComponent],
  providers: [ComentarioService],
  exports: [ComentarioListComponent]
})
export class ComentarioModule { }
