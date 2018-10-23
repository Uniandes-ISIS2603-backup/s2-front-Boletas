import {NgModule} from '@angular/core/';
import {CommonModule} from '@angular/common/';
import {OrganizadorListComponent} from './organizador-list/organizador-list.component'

import {OrganizadorService} from './organizador.service'
import {FormsModule} from '@angular/forms'

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[OrganizadorListComponent],
    providers: [OrganizadorService],
    exports: [OrganizadorListComponent]
})

export class OrganizadorModule{
}