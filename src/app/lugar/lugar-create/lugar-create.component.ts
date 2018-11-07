import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { LugarService } from '../lugar.service';
import {Lugar} from '../lugar';
@Component({
  selector: 'app-lugar-create',
  templateUrl: './lugar-create.component.html',
  styleUrls: ['./lugar-create.component.css']
})
export class LugarCreateComponent implements OnInit {

  constructor(
  private lugarService: LugarService,
  private toastrService: ToastrService) { }
  
  lugar: Lugar;
  /**
   * Contenedora con las opciones para selección de TIpo
   */
  tipo=["Coliseo", "Teatro"];
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  createLugar(): Lugar{
      console.log(this.lugar);
      this.lugarService.createLugar(this.lugar)
      .subscribe((lugar)=>{
          this.lugar = lugar;
          this.create.emit();
          this.toastrService.success("Ellugar fue creado", "lugar creation");
          
      });
      return this.lugar;
  }
  
   cancelCreatio():void{
       this.cancel.emit();
   }
 
  ngOnInit() {
      this.lugar = new Lugar();
  }

}
