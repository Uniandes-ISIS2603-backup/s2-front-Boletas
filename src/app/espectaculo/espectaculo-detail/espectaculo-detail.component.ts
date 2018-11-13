import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {EspectaculoService} from '../espectaculo.service';
import {Espectaculo} from '../espectaculo';
import {EspectaculoDetail} from '../espectaculo-detail';

/**
 * Componente de detail de un espectaculo
 * @author Sebastian Rodriguez
 */
@Component({
  selector: 'app-espectaculo-detail',
  templateUrl: './espectaculo-detail.component.html',
  styleUrls: ['./espectaculo-detail.component.css']
})
export class EspectaculoDetailComponent implements OnInit, OnDestroy{

  /**
   * Constructor del componente
   */
  constructor(private espectaculoService: EspectaculoService,
  private route: ActivatedRoute,
  private router : Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
  }

  /**
   * El id del espectaculo que llego de la ruta 
   */
  espectaculo_id: number;
  
  /**
   * El espectaculo que queremos mostrar
   */
  @Input() espectaculoDetail: EspectaculoDetail;
  
  /**
   * Los espectaculos, sin contar al que se esta mostrando
   */
  otrosEspectaculos : Espectaculo[];
  
  navigationSubscription;
    
  
   getEspectaculoDetail(): void {
       this.espectaculoService.getEspectaculoDetail(this.espectaculo_id)
            .subscribe(espectaculoDetail => {
                this.espectaculoDetail = espectaculoDetail;
                console.log(this.espectaculoDetail);
            });
    }
    
    
    /**
     * Al mostrarse el detail de un espectaculo, tambien va  a aparecer los demas 
     * espectaculo, este metodo define los espectaculos, menos el que se esta mostrando
     */
    getOtrosEspectaculos(): void
    {
        this.espectaculoService.getEspectaculos()
            .subscribe(espectaculos => {
                this.otrosEspectaculos = espectaculos;
                this.otrosEspectaculos = this.otrosEspectaculos.filter(espectaculo => espectaculo.id !== this.espectaculo_id);
            });
    }
    
    /**
     * Metodo que se llama al iniciar el componente 
     * Se declara el espectaculo detail
     */
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
