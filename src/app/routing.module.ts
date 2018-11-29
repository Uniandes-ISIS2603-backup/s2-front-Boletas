import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {EspectaculoListComponent} from '../app/espectaculo/espectaculo-list/espectaculo-list.component';
import {EspectaculoDetailComponent} from '../app/espectaculo/espectaculo-detail/espectaculo-detail.component';
import {CompraListComponent} from '../app/compra/compra-list/compra-list.component';
import { CompraDetailComponent } from '../app/compra/compra-detail/compra-detail.component';
import { BoletaListComponent } from '../app/boleta/boleta-list/boleta-list.component';
import { BoletaDetailComponent } from '../app/boleta/boleta-detail/boleta-detail.component';
import {OrganizadorListComponent} from '../app/organizador/organizador-list/organizador-list.component';
import {ClienteListComponent} from '../app/cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../app/cliente/cliente-detail/cliente-detail.component';
import {ComentarioListComponent} from '../app/comentario/comentario-list/comentario-list.component';
import {ComentarioDetailComponent} from '../app/comentario/comentario-detail/comentario-detail.component';
import {OrganizadorDetailComponent} from '../app/organizador/organizador-detail/organizador-detail.component';
import {LugarListComponent} from '../app/lugar/lugar-list/lugar-list.component';
import {LugarDetailComponent} from '../app/lugar/lugar-detail/lugar-detail.component';
import {SillaListComponent} from '../app/silla/silla-list/silla-list.component';
import {SillaDetailComponent} from '../app/silla/silla-detail/silla-detail.component';
import {OrganizadorEditComponent} from '../app/organizador/organizador-edit/organizador-edit.component';
import {IngrLoginComponent} from '../app/ingr/ingr-login/ingr-login.component';
import {IngrSignUpComponent} from '../app/ingr/ingr-sign-up/ingr-sign-up.component';
import {OrganizadorCreateComponent} from '../app/organizador/organizador-create/organizador-create.component';
import {ClienteCreateComponent} from '../app/cliente/cliente-create/cliente-create.component';
import {ClienteEditComponent} from '../app/cliente/cliente-edit/cliente-edit.component';
import {EspectaculoEditComponent} from '../app/espectaculo/espectaculo-edit/espectaculo-edit.component';
import {EspectaculoCarouselComponent} from '../app/espectaculo/espectaculo-carousel/espectaculo-carousel.component';
import {LugarEditComponent} from '../app/lugar/lugar-edit/lugar-edit.component';

const routes: Routes=[
    {
        path: 'espectaculos',
        children : [
            {
                path: 'list',
                component : EspectaculoListComponent
            },
            {
                path:':id',
                component : EspectaculoDetailComponent
            },
            {
                 path:':id/edit',
                component:EspectaculoEditComponent
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
                path:':id',
                component: BoletaDetailComponent
            }
        ]
    },
    {
        path: 'ingr',
        children:[
            {
                path:'login',
                component: IngrLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path:'sign-up',
                component: IngrSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'organizadores',
        children: [
            {
                path: 'list',
                component:OrganizadorListComponent
            },
            {
                path:'create',
                component:OrganizadorCreateComponent
            },
            {
                path:':id',
                component: OrganizadorDetailComponent
            },
            {
                path: ':id/edit',
                component:OrganizadorEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ORGZ']
                    }
                }
            }
        ]
    },
    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent,
                children:[{
                    path: ':id',
                    component:ClienteDetailComponent
                }]
            },
            {
                path:'create',
                component: ClienteCreateComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
            },
            {
                path:':id/edit',
                component:ClienteEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT']
                    }
                }
            }
             
        ]
    },
    {
        path: 'comentarios',
        children: [
            {
                path: 'list',
                component: ComentarioListComponent
            },
            {
                path:':id',
                component: ComentarioDetailComponent
            }
        ]
    },
    {
        path: 'lugares',
        children: [
           {
               path: 'list',
               component: LugarListComponent
           },
           {
               path:':id',
               component: LugarDetailComponent
           },
           {
               path: ':id/edit',
               component: LugarEditComponent
           }
        ]
    },
    {
        path:'sillas',
        children: [
            {
                path: 'list',
                component: SillaListComponent
            },
            {
                path: ':id',
                component: SillaDetailComponent
            }
        ]
    },
    {
        path: 'home',
        component:EspectaculoCarouselComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule {
    
}
