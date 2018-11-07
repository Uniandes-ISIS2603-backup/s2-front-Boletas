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

  constructor(private lugarService: LugarService) { }
  @Input() lugares: Lugar[];
  lugar_id: number;
  selectedLugar:Lugar;
  showCreate:boolean;
  onSelected(lugar_id:number):void
  {
      this.showCreate = false;
      this.lugar_id = lugar_id;
      this.selectedLugar = new LugarDetail();
      this.getLugarDetail();
  }
  showHideCreate():void
  {
      if(this.selectedLugar)
      {
          this.selectedLugar = undefined;
          this.lugar_id = undefined;
      }
      this.showCreate = !this.showCreate
  }
  getLugares():void
  {
      this.lugarService.getLugares().subscribe(lugares => this.lugares = lugares);
  }
  
  getLugarDetail():void
  {
      this.lugarService.getLugarDetail(this.lugar_id)
          .subscribe(selectedLugar => {
          this.selectedLugar = selectedLugar
          });
  }
  
  ngOnInit() {
      this.getLugares();
  }
  
  
  
  
}
