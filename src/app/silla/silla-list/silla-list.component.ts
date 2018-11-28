import { Component, OnInit, Input } from '@angular/core';
import {Silla} from '../silla';
import {SillaService} from '../silla.service';
import {SillaDetail} from '../silla-detail'
import {ActivatedRoute} from '@angular/router';
import {LugarService} from '../../lugar/lugar.service';
import {LugarDetail} from '../../lugar/lugar-detail';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-silla-list',
  templateUrl: './silla-list.component.html',
  styleUrls: ['./silla-list.component.css']
})
export class SillaListComponent implements OnInit {
/**
 * Método constructor de la clase.
 */
  constructor(private sillaService: SillaService, private route:ActivatedRoute, private lugars:LugarService) { }
  @Input() sillas: Silla[];

  @Input() espectaculo_id: number;

  @Input() lugar_id:number;

  lugar: LugarDetail;

  sillasS: Silla[];

  silla_id:number;

  selectedSilla:SillaDetail;
  showCreate:boolean;
  tipo:boolean;
  /**
   * Método ejecutado cuando se selecciona una silla de la lista.
   */
  onSelected(silla_id:number):void
  {
      this.showCreate = false;
      this.silla_id = silla_id;
      this.selectedSilla = new SillaDetail();
      this.getSillaDetail();
  }
  /**
   * Método que retorna el detail de la silla actual seleccionada.
   */
  getSillaDetail():void
  {
      this.sillaService.getSillaDetail(this.silla_id)
          .subscribe(selectedSilla => {
              this.selectedSilla = selectedSilla
          });
  }
  
  /**
   * Método que permite que se vea el panel de creación de una silla.
   */
  showHideCreate():void
  {
       if(this.selectedSilla)
      {
          this.selectedSilla = undefined;
          this.silla_id = undefined;
      }
      this.showCreate = !this.showCreate
  }
  
  /**
   * Método que retorna la lista de sillas.
   */
  getSillas(): void 
  {
      this.lugars.getLugarDetail(this.lugar_id).subscribe(lugar => this.lugar = lugar);
      this.sillaService.getSillas().subscribe(sillas => this.sillas = sillas);
  }
  ngOnInit() {
    this.route.queryParams
    .filter(params => params.lugar_id)
    .subscribe(params => {
      console.log(params); 

      this.lugar_id = params.lugar_id;
      console.log(this.lugar_id); 
    });
    this.route.queryParams
    .filter(params => params.espectaculo_id)
    .subscribe(params => {
      console.log(params); 

      this.espectaculo_id = params.espectaculo_id;
      console.log(this.espectaculo_id); 
    });
      this.getSillas();
      this.showCreate = false;
      this.selectedSilla = undefined;
      this.silla_id = undefined;
      this.sillasS = new Array();
  }

  sillaLugar(sillaid):boolean
  {
      for(let item of this.lugar.sillas){
        if(sillaid === item.id)
        {
          return true;
        }
    }
  }

  agregarCarro(silla):void{
    this.sillasS.push(silla);
    console.log(this.sillasS.length);
  }
  
  eliminarCarrito(silla):void{
      var i:number =this.sillasS.indexOf(silla);
      this.sillasS.splice(i,1);
  }

  comprar():void{

  }
}
