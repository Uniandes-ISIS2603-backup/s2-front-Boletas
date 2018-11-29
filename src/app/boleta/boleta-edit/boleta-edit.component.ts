import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {BoletaService} from '../boleta.service';
import {BoletaDetail} from '../boleta-detail';
import {Boleta} from '../boleta';

@Component({
  selector: 'app-boleta-edit',
  templateUrl: './boleta-edit.component.html',
  styleUrls: ['./boleta-edit.component.css']
})
export class BoletaEditComponent implements OnInit {

  constructor(private boletaService: BoletaService, 
      private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute) {
  }

  

  model:any;

  boleta: BoletaDetail;


  @Input()
  boleta_id: number;


  getBoleta(): void {
    this.boletaService.getBoletaDetail(this.boleta_id).subscribe( boleta =>{this.boleta = boleta}
    );
  }

  cancelEdicion(): void {
    this.toastrService.warning('La boleta no fue editada', 'Boleta edition');
        this.router.navigate(['/boletas/list']);
  }
  

  updateBoleta():void {
    this.boletaService.updateBoleta(this.boleta).subscribe(
      () => {this.router.navigate(['/boletas/'+this.boleta.id]);
      this.toastrService.success('La boleta se a modificado correctamente');
    });
    
  }

  ngOnInit() {

     this.boleta = new BoletaDetail();
       this.getBoleta();
  }



}

