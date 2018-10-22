import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {EspectaculoListComponent} from '../app/espectaculo/espectaculo-list/espectaculo-list.component';

const routes: Routes=[
    {
        path: 'espectaculos',
        children : [
            {
                path: 'list',
                component : EspectaculoListComponent
            }
        ]
    }
]
