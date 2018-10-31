import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';
import {EspectaculoDetail} from '../espectaculo-detail';


@Component({
  selector: 'app-espectaculo-detail',
  templateUrl: './espectaculo-detail.component.html',
  styleUrls: ['./espectaculo-detail.component.css']
})
export class EspectaculoDetailComponent implements OnInit, OnDestroy{

  constructor(private espectaculoService: EspectaculoService,
  private route: ActivatedRoute,
  private router : Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
  }

  espectaculo_id: number;
  
  @Input() espectaculoDetail: EspectaculoDetail;
  
  otrosEspectaculos : Espectaculo[];
  
  navigationSubscription;
    
  
   getEspectaculoDetail(): void {
       this.espectaculoService.getEspectaculoDetail(this.espectaculo_id)
            .subscribe(espectaculoDetail => {
                this.espectaculoDetail = espectaculoDetail;
            });
    }
    
    getOtrosEspectaculos(): void
    {
        this.espectaculoService.getEspectaculos()
            .subscribe(espectaculos => {
                this.otrosEspectaculos = espectaculos;
                this.otrosEspectaculos = this.otrosEspectaculos.filter(espectaculo => espectaculo.id !== this.espectaculo_id);
            });
    }
    
  ngOnInit() {
      
        this.espectaculo_id = +this.route.snapshot.paramMap.get('id');  
        this.espectaculoDetail = new EspectaculoDetail();            
        this.getEspectaculoDetail();
        this.getOtrosEspectaculos();
  }
  
  ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
