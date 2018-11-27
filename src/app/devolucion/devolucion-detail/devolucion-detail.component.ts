import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DevolucionService } from '../devolucion.service';

import { Devolucion } from '../devolucion';

@Component({
  selector: 'app-devolucion-detail',
  templateUrl: './devolucion-detail.component.html',
  styleUrls: ['./devolucion-detail.component.css']
})
export class DevolucionDetailComponent implements OnInit {

   constructor(
        private route: ActivatedRoute,
        private devolucionService: DevolucionService 
    ) { }

     @Input() devolucion: Devolucion;
    devolucion_id: number;
    
    getDevolucionDetail(): void {
        this.devolucionService.getDevolucionDetail(this.devolucion_id)
            .subscribe(devolucion => {
                this.devolucion = devolucion
            });
    }
    
    ngOnInit() {
        console.log(this.devolucion_id);
        this.devolucion_id = +this.route.snapshot.paramMap.get('id');
        this.getDevolucionDetail();
            }

}
