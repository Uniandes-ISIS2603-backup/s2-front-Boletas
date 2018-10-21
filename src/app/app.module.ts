import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompraModule } from './compra/compra.module';
import {EspectaculoModule} from './espectaculo/espectaculo.module';
import {SillaModule} from './silla/silla.module';
import {ClienteModule} from './cliente/cliente.module';
import {BoletaModule} from './boleta/boleta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CompraModule,
    EspectaculoModule,
    ClienteModule,
    SillaModule,
    BoletaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
