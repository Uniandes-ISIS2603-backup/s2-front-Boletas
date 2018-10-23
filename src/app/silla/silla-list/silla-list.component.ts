import { Component, OnInit } from '@angular/core';
import {Silla} from '../silla';
import {SillaService} from '../silla.service';

@Component({
  selector: 'app-silla-list',
  templateUrl: './silla-list.component.html',
  styleUrls: ['./silla-list.component.css']
})
export class SillaListComponent implements OnInit {

  constructor(private sillaService: SillaService) { }
  sillas: Silla[];
  getSillas(): void 
  {
      this.sillaService.getSillas().subscribe(sillas => this.sillas = sillas);
  }
  ngOnInit() {
      this.getSillas();
  }

}
