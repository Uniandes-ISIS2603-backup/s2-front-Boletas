import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from "../lugar.service";
import {LugarDetail} from '../lugar-detail';
import {Lugar} from '../lugar';
import {EspectaculoService} from '../../espectaculo/espectaculo.service';
import {Espectaculo} from '../../espectaculo/espectaculo';



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
  private lugarService:LugarService,
  private espectaculoService:EspectaculoService) { }
  lugar_id:number;
  

  @Input() espectaculos: Espectaculo[];
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
      
     // this.lugar_id = +this.route.snapshot.paramMap.get('id');
      //console.log(this.lugarDetail.id);
      this.espectaculos = new Array();
      this.lugar_id = this.lugarDetail.id;
      console.log(this.lugar_id);
      if (this.lugarDetail){
            this.lugarDetail = new LugarDetail();
            this.getLugarDetail();
            this.getEspectaculosLugar();
        }  
        
  }


  getEspectaculosLugar():void{
    this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
  }

  esta(espectaculoid):boolean
  {
      if((espectaculoid) === this.lugarDetail.id)
      {
        return true;
      }
      
      return false;
  }

}
