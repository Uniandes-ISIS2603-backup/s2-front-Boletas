import { Component, OnInit } from '@angular/core';
import {Lugar} from "../lugar";
import {LugarService} from "../lugar.service";

@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrls: ['./lugar-list.component.css']
})
export class LugarListComponent implements OnInit {

  constructor(private lugarService: LugarService) { }
  lugares: Lugar[];
  
  
  getLugares():void
  {
      this.lugarService.getLugares().subscribe(lugares => this.lugares = lugares);
  }
  ngOnInit() {
      this.getLugares();
  }

}
