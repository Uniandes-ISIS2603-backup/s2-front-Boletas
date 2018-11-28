import { Component, OnInit, Input } from '@angular/core';
import {Silla} from '../silla';
import {SillaService} from '../silla.service';
import {SillaDetail} from '../silla-detail'
@Component({
  selector: 'app-silla-list',
  templateUrl: './silla-list.component.html',
  styleUrls: ['./silla-list.component.css']
})
export class SillaListComponent implements OnInit {
/**
 * Método constructor de la clase.
 */
  constructor(private sillaService: SillaService) { }
  @Input() sillas: Silla[];

  @Input() espectaculo_id: number;

  @Input() lugar_id:number;

  silla_id:number;

  selectedSilla:Silla;
  showCreate:boolean;
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
      this.sillaService.getSillas().subscribe(sillas => this.sillas = sillas);
  }
  ngOnInit() {
       this.getSillas();
      this.showCreate = false;
      this.selectedSilla = undefined;
      this.silla_id = undefined;
      
  }

}
