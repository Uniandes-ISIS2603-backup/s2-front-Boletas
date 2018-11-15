import { Component, OnInit, Input } from '@angular/core';
import { Devolucion } from '../devolucion';
import { DevolucionService } from '../devolucion.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-devolucion-list',
  templateUrl: './devolucion-list.component.html',
  styleUrls: ['./devolucion-list.component.css']
})
export class DevolucionListComponent implements OnInit {

  constructor(private devolucionService: DevolucionService, private route:ActivatedRoute) { } 
    @ Input() devoluciones: Devolucion[];
    devolucion_id: number;
    selectedDevolucion : Devolucion;
    showCreate: boolean;
    allDevolucion :string= 'no';
    
    onSelected(devolucion_id: number):void {
        this.devolucion_id = devolucion_id;
        this.selectedDevolucion = new Devolucion();
        this.getDevolucionDetail();        
    }
    
    getDevolucionDetail(): void {
        this.devolucionService.getDevolucionDetail(this.devolucion_id)
            .subscribe(selectedDevolucion => {
                this.selectedDevolucion = selectedDevolucion
            });
    }
    
    showHideCreate(): void {
        if (this.selectedDevolucion) {
            this.selectedDevolucion = undefined;
            this.devolucion_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
    
    
    getDevoluciones(): void {
        this.devolucionService.getDevoluciones().subscribe(devoluciones => this.devoluciones = devoluciones);
    }

    ngOnInit() {

        this.route.queryParams
      .filter(params => params.allDevolucion)
      .subscribe(params => {
        console.log(params); 

        this.allDevolucion = params.allDevolucion;
        console.log(this.allDevolucion); 
      });
      if (this.allDevolucion == 'yes'){
          console.log("allDevolucion");
      
          this.getDevoluciones();
       }
        
    }

}
