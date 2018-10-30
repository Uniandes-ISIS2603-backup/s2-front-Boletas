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
  constructor(private route: ActivatedRoute, private lugarServie:LugarService) { }
  lugar_id:number;
  
  getLugarDetail():void
  {
      this.lugarServie.getLugarDetail(this.lugar_id)
      .subscribe( lugarDetail => {
          this.lugarDetail = lugarDetail
      });
  }
  
  ngOnInit() {
      this.lugar_id = +this.route.snapshot.paramMap.get('id');
      if (this.lugar_id)
      {
          this.lugarDetail = new LugarDetail();
          this.getLugarDetail();
      }
  }

}
