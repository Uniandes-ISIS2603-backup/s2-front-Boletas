import { Component, OnInit , Input} from '@angular/core';
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
  private route: ActivatedRoute,
  private router : Router) { }

  espectaculo_id: number;
  
  @Input() espectaculoDetail: EspectaculoDetail;
    
  
   getBookDetail(): void {
       this.espectaculoService.getEspectaculoDetail(this.espectaculo_id)
            .subscribe(espectaculoDetail => {
                this.espectaculoDetail = espectaculoDetail;
            });
    }
    
  ngOnInit() {
      
        this.espectaculo_id = +this.route.snapshot.paramMap.get('id');              
        this.getBookDetail();
  }

}
