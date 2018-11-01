import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,  NavigationEnd } from '@angular/router';

import { BoletaService } from '../boleta.service';

import { BoletaDetail } from '../boleta-detail';
import { Boleta } from '../boleta';
@Component({
  selector: 'app-boleta-detail',
  templateUrl: './boleta-detail.component.html',
  styleUrls: ['./boleta-detail.component.css']
})
export class BoletaDetailComponent implements OnInit {



    constructor(
        private route: ActivatedRoute,
        private boletaService: BoletaService,
         
    ) { }
    @Input() boletaDetail: BoletaDetail;
    boleta_id:number;
    getBoletaDetail(): void {
        this.boletaService.getBoletaDetail(this.boleta_id)
            .subscribe(boletaDetail => {
                this.boletaDetail = boletaDetail
            });
    }

  ngOnInit() {
      console.log(this.boleta_id);
        this.boleta_id = +this.route.snapshot.paramMap.get('id');
        this.getBoletaDetail();
  }

}
