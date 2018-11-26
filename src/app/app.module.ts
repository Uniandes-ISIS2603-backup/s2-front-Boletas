import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CompraModule } from './compra/compra.module';
import {EspectaculoModule} from './espectaculo/espectaculo.module';
import {SillaModule} from './silla/silla.module';
import {ClienteModule} from './cliente/cliente.module';
import {BoletaModule} from './boleta/boleta.module';
import {LugarModule} from './lugar/lugar.module';
import {OrganizadorModule} from './organizador/organizador.module'
import {ComentarioModule} from './comentario/comentario.module';
import {IngrModule} from './ingr/ingr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    CompraModule,
    FormsModule,
    EspectaculoModule,
    ClienteModule,
    SillaModule,
    BoletaModule,
    LugarModule,
    OrganizadorModule,
    ComentarioModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgbModule,
    ModalDialogModule.forRoot(),
    IngrModule,
    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot()
    
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
