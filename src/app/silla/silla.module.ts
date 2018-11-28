import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SillaListComponent } from './silla-list/silla-list.component';

import { SillaService } from './silla.service';
import { FormsModule } from '@angular/forms';
import { SillaDetailComponent } from './silla-detail/silla-detail.component';
import { BoletaModule } from '../boleta/boleta.module';
import { SillaCreateComponent } from './silla-create/silla-create.component';

import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    BoletaModule,
    HttpClientModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [SillaListComponent, SillaDetailComponent, SillaCreateComponent],
  providers: [SillaService],
  exports:[SillaListComponent]
})
export class SillaModule { }
