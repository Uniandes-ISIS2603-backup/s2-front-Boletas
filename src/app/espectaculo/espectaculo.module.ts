import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspectaculoListComponent } from './espectaculo-list/espectaculo-list.component';
import { EspectaculoDetailComponent } from './espectaculo-detail/espectaculo-detail.component';
import {EspectaculoService} from './espectaculo.service';
import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EspectaculoCreateComponent } from './espectaculo-create/espectaculo-create.component';
import { ComentarioModule} from '../comentario/comentario.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    ComentarioModule
  ],
  declarations: [EspectaculoListComponent, EspectaculoDetailComponent, EspectaculoCreateComponent],
  providers:[EspectaculoService],
  exports:[EspectaculoListComponent]
})
export class EspectaculoModule { }
