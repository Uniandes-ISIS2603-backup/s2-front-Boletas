import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';



import { AppComponent } from './app.component';
import { CompraModule } from './compra/compra.module';
import {EspectaculoModule} from './espectaculo/espectaculo.module';
import {SillaModule} from './silla/silla.module';
import {ClienteModule} from './cliente/cliente.module';
import {BoletaModule} from './boleta/boleta.module';
import {LugarModule} from './lugar/lugar.module';

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
    BoletaModule,
    LugarModule
    
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
