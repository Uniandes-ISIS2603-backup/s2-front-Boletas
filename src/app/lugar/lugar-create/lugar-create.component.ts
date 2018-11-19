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

/**
 * Constructor del componente.
 */
  constructor(
  private lugarService: LugarService,
  private toastrService: ToastrService) { }
  
  /**
   * Atributo designado al objeto por medio del cuál se envía el nuevo lugar creado al back.
   */
  lugar: Lugar;
  /**
   * Contenedora con las opciones para selección de TIpo
   */
  tipo=["Coliseo", "Teatro"];
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  /**
   * Método que crea un nuevo lugar
   */
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
  /**
   * Método correspondiente a cuando se cancela la acción de crear un nuevo lugar.
   */
   cancelCreation():void{
       this.cancel.emit();
   }
 
  ngOnInit() {
      this.lugar = new Lugar();
  }

}
