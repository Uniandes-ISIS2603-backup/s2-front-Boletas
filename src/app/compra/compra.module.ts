import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraListComponent } from './compra-list/compra-list.component';

import { CompraService } from './compra.service';

@NgModule({
    imports: [       
        CommonModule
    ],
    declarations: [CompraListComponent],
    exports:[CompraListComponent]
})
export class CompraModule {}