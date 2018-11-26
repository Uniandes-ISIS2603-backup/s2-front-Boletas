import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteEditComponent} from './cliente-edit/cliente-edit.component';

import {ClienteService} from './cliente.service';
import {FormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import {RoutingModule} from '../routing.module';
import { HttpClientModule } from '@angular/common/http';

import {ComentarioModule} from '../comentario/comentario.module';
import {CompraModule} from '../compra/compra.module';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
        , ComentarioModule,CompraModule, NgbModule,
        NgxPermissionsModule,
        RoutingModule,
        HttpClientModule
    ],
    
    declarations:[ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent],
    providers:[ClienteService],
    exports:[ClienteListComponent,ClienteEditComponent]
})

export class ClienteModule{}

