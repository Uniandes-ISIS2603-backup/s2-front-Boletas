import { Component, OnInit , Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {LugarService} from '../lugar.service';
import {LugarDetail} from '../lugar-detail';
import {Lugar} from '../lugar';

@Component({
  selector: 'app-lugar-edit',
  templateUrl: './lugar-edit.component.html',
  styleUrls: ['./lugar-edit.component.css']
})
export class LugarEditComponent implements OnInit, OnChanges {

  constructor(private lugarService: LugarService, private router:Router, private toastrService:ToastrService , private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) =>
      {
          if (e instanceof NavigationEnd)
          {
              this.ngOnInit();
          }
      });
  }

  navigationSubscription;

  model:any;

  @Input() lugarDetail: LugarDetail;

  @Output() cancel = new EventEmitter();

  @Output() update = new EventEmitter();
  
  @Input()
  lugar_id: number;


  getCliente(): void {
    this.lugarService.getLugarDetail(this.lugar_id).subscribe( lugar =>{this.lugarDetail = lugar}
    );
  }

  cancelarEdicion(): void {
    this.toastrService.warning('No se edito el lugar');
    this.cancel.emit();
  }
  

  updateLugar():void {
    this.lugarService.updateLugar(this.lugarDetail).subscribe(
      () => {this.router.navigate(['/lugares/list']);
      this.toastrService.success('El lugar se a modificado correctamente');
    });
    this.update.emit();
  }

  ngOnInit() {

    this.lugar_id = +this.route.snapshot.paramMap.get('id');  
    this.lugarDetail = new LugarDetail();
    this.getCliente();
    console.log(this.lugarDetail);
    this.model = new Lugar();
  }

  ngOnChanges() {
    this.ngOnInit();
}

}
