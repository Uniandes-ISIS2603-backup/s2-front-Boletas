import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';

import {ClienteService} from './cliente.service';
import {FormsModule} from '@angular/forms'

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    
    declarations:[ClienteListComponent, ClienteDetailComponent],
    providers:[ClienteService],
    exports:[ClienteListComponent]
})

export class ClienteModule{}

