import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EspectaculoListComponent} from '../app/espectaculo/espectaculo-list/espectaculo-list.component';
import {CompraListComponent} from '../app/compra/compra-list/compra-list.component';
import { CompraDetailComponent } from '../app/compra/compra-detail/compra-detail.component';
import { BoletaListComponent } from '../app/boleta/boleta-list/boleta-list.component';

const routes: Routes=[
    {
        path: 'espectaculos',
        children : [
            {
                path: 'list',
                component : EspectaculoListComponent
            }
        ]
    },
    {
        path: 'compras',
        children: [
            {
                path: 'list',
                component : CompraListComponent
            },
            {
                path: ':id',
                component: CompraDetailComponent
            }
        ]
    },
    {
        path: 'boletas',
        children: [
            {
                path: 'list',
                component: BoletaListComponent
            },
            {
                path:'id',
                component;BoletaDetailComponent
            }
        ]
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule {
    
}
