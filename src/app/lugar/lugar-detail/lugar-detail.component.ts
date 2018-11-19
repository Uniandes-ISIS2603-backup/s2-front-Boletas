import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from "../lugar.service";
import {LugarDetail} from '../lugar-detail';
import {Lugar} from '../lugar';



@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent implements OnInit {
    @Input() lugarDetail: LugarDetail;
/**
*Constructor que contiene
*@param route
*@param lugarService servicio del lugar.
**/
  constructor(
  private route: ActivatedRoute, 
  private lugarService:LugarService) { }
  lugar_id:number;
  
  /**
   * Método que retorna el detail del objeto lugar seleccionado de la lista en el front.
   */
  getLugarDetail():void
  {
      this.lugarService.getLugarDetail(this.lugar_id)
      .subscribe( lugarDetail => {
          this.lugarDetail = lugarDetail;
      });
  }
  
  ngOnInit() {
      console.log(this.lugar_id);
      this.lugar_id = +this.route.snapshot.paramMap.get('id');
     
      this.lugarDetail = new LugarDetail();
      this.getLugarDetail();
      
  }

}
