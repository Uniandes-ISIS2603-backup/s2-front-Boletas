import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompraModule } from './compra/compra.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
