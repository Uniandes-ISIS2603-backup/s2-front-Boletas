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
  selectedLugar:Lugar;
  showCreate:boolean;
  
  showEdit:boolean;
  lugar_edit_id:number;
  onSelected(lugar_id:number):void
  {
      this.showCreate = false;
      this.lugar_id = lugar_id;
      this.selectedLugar = new LugarDetail();
      this.getLugarDetail();
  }
  
  /**
   * Método por el que se muestura el panel de crear lugar.
   */
  showHideCreate(lugar_id: number):void
  {
      if (!this.showEdit || (this.showEdit && lugar_id != this.lugar_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.lugar_edit_id = lugar_id;
        }
        else {
            this.showEdit = false;
        }
  }
  
  showHideEdit()
  {
      if (this.selectedLugar) {
            this.selectedLugar = undefined;
            this.lugar_id = undefined;
        }
        this.showEdit = !this.showEdit;
  }
  updateLugar():void
  {
      this.showEdit = false;
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
          .subscribe(selectedLugar => {
          this.selectedLugar = selectedLugar
          });
  }
  
  ngOnInit() {
      this.getLugares();
      this.showCreate = false;
      this.selectedLugar = undefined;
      this.lugar_id = undefined;
      this.showEdit = false;
      
  }
  
  
  
  
}
