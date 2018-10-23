import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';
import {EspectaculoDetail} from '../espectaculo-detail';


@Component({
  selector: 'app-espectaculo-detail',
  templateUrl: './espectaculo-detail.component.html',
  styleUrls: ['./espectaculo-detail.component.css']
})
export class EspectaculoDetailComponent implements OnInit {

  constructor(private espectaculoService: EspectaculoService,
  private route: ActivatedRoute) { }

  espectaculo_id: number;
  
  espectaculoDetail: EspectaculoDetail;
    
  ngOnInit() {
      
        this.espectaculo_id = +this.route.snapshot.paramMap.get('id');              
        
  }

}
