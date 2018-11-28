import { Component, OnInit, Input } from '@angular/core';
import {Lugar} from "../lugar";
import {LugarService} from "../lugar.service";
import { LugarDetail } from "../lugar-detail";
@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent implements OnInit {

/**
 * Constructor del componente.
 */
  constructor(private lugarService: LugarService) { }
  @Input() lugares: Lugar[];
  lugar_id: number;
  selectedLugar:LugarDetail;
  showCreate:boolean;
  onSelected(lugar_id:number):void
  {
      this.showCreate = false;
      this.lugar_id = lugar_id;
      console.log(this.lugar_id);
      this.selectedLugar = new LugarDetail();
      this.getLugarDetail();
      this.selectedLugar.id = this.lugar_id;
      console.log(this.selectedLugar.id);
  }
  
  /**
   * Método por el que se muestura el panel de crear lugar.
   */
  showHideCreate():void
  {
      if(this.selectedLugar)
      {
       //   this.selectedLugar = undefined;
         // this.lugar_id = undefined;
      }
      this.showCreate = !this.showCreate
  }
  /**
   * Retorna la lista de lugares del back.
   */
  getLugares():void
  {
      this.lugarService.getLugares().subscribe(lugares => this.lugares = lugares);
  }
  
  /**
   * Retorna el detail del recurso getFFR
   */
  getLugarDetail():void
  {
      this.lugarService.getLugarDetail(this.lugar_id)
          .subscribe(lugar => {
          this.selectedLugar = lugar
          });
  }
  
  ngOnInit() {
      
      this.showCreate = false;
      this.selectedLugar = undefined;
      this.lugar_id = undefined;
      this.getLugares();
  }
  
  
  
  
}
