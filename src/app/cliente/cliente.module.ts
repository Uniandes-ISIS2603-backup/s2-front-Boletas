import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';

import {ClienteService} from './cliente.service';
import {FormsModule} from '@angular/forms'

import {ComentarioModule} from '../comentario/comentario.module';
import {CompraModule} from '../compra/compra.module';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
        , ComentarioModule,CompraModule
    ],
    
    declarations:[ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
    providers:[ClienteService],
    exports:[ClienteListComponent]
})

export class ClienteModule{}

