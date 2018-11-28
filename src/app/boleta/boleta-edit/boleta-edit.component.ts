import { Component, OnInit , Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BoletaService} from '../boleta.service';
import {BoletaDetail} from '../boleta-detail';
import {Boleta} from '../boleta';

@Component({
  selector: 'app-boleta-edit',
  templateUrl: './boleta-edit.component.html',
  styleUrls: ['./boleta-edit.component.css']
})
export class BoletaEditComponent implements OnInit, OnChanges {

  constructor(private boletaService: BoletaService, private router:Router, private toastrService:ToastrService , private route: ActivatedRoute) {
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

  boletaDetail: BoletaDetail;

  @Output() cancel = new EventEmitter();

  @Output() update = new EventEmitter();

  @Input()
  boleta_id: number;


  getBoleta(): void {
    this.boletaService.getBoletaDetail(this.boleta_id).subscribe( boleta =>{this.boletaDetail = boleta}
    );
  }

  cancelarEdicion(): void {
    this.toastrService.warning('No se edito la boleta');
    this.cancel.emit();
  }
  

  updateBoleta():void {
    this.boletaService.updateBoleta(this.boletaDetail).subscribe(
      () => {this.router.navigate(['/boletas/list']);
      this.toastrService.success('La boleta se a modificado correctamente');
    });
    this.update.emit();
  }

  ngOnInit() {

    this.boleta_id = +this.route.snapshot.paramMap.get('id');  
    this.boletaDetail = new BoletaDetail();
    this.getBoleta();
    console.log(this.boletaDetail);
    this.model = new Boleta();
  }

  ngOnChanges() {
    this.ngOnInit();
}

}

