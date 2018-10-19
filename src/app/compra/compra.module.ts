import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraListComponent } from './compra-list/compra-list.component';

import { CompraService } from './compra.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule
    ],
    declarations: [CompraListComponent],
    providers: [CompraService],
    exports:[CompraListComponent]
})
export class CompraModule {}