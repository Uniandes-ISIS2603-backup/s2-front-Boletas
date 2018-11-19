import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SillaService} from '../silla.service';
import {SillaDetail} from '../silla-detail';
import {Silla} from '../silla';
@Component({
  selector: 'app-silla-detail',
  templateUrl: './silla-detail.component.html',
  styleUrls: ['./silla-detail.component.css']
})
export class SillaDetailComponent implements OnInit 
    /**
     * Atributo correspondiente a la silla seleccionadaa actualmente de la lista de sillas de un lugar.
     */{
@Input() sillaDetail: SillaDetail;
/**
 * Método constructor de la clase.
 */
  constructor(
  private route: ActivatedRoute,
  private sillaService:SillaService) { }
  silla_id : number;
/**
 * Método que retorna el detail de la silla.
 */
getSillaDetail():void
{
    this.sillaService.getSillaDetail(this.silla_id)
      .subscribe( sillaDetail => {
          this.sillaDetail = sillaDetail
      });
}

  ngOnInit() {
      console.log(this.silla_id);
      this.silla_id = +this.route.snapshot.paramMap.get('id');
     
          this.sillaDetail = new SillaDetail();
          this.getSillaDetail();
  }

}
