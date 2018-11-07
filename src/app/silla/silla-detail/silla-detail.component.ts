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
export class SillaDetailComponent implements OnInit {
@Input() sillaDetail: SillaDetail;
  constructor(
  private route: ActivatedRoute,
  private sillaService:SillaService) { }
  silla_id : number;

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
