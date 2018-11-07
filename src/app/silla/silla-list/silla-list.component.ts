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

  constructor(private sillaService: SillaService) { }
  @Input() sillas: Silla[];
  silla_id:number;
  selectedSilla:Silla;
  showCreate:boolean;
  
  onSelected(silla_id:number):void
  {
      this.showCreate = false;
      this.silla_id = silla_id;
      this.selectedSilla = new SillaDetail();
      this.getSillaDetail();
  }
  
  getSillaDetail():void
  {
      this.sillaService.getSillaDetail(this.silla_id)
          .subscribe(selectedSilla => {
              this.selectedSilla = selectedSilla
          });
  }
  
  showHideCreate():void
  {
       if(this.selectedSilla)
      {
          this.selectedSilla = undefined;
          this.silla_id = undefined;
      }
      this.showCreate = !this.showCreate
  }
  
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
