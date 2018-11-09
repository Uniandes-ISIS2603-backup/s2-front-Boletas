import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {OrganizadorDetail} from '../organizador-detail';
import {OrganizadorService} from '../organizador.service';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

  /**
   * Constructor del componente de organizador Detail, declara el servicio que lo provee y el router
   */
  constructor(private organizadorService: OrganizadorService, private route:ActivatedRoute) { }
  
  
  /**
   * El id que entra por parametro
   */
  organizador_id:number;
  
  
  /**
   * El organizador que se eligio
   */
  @Input() organizadorDetail : OrganizadorDetail;


  /**
   * Dar el organizador que se ha seleccionado
   */
  getOrganizadorDetail(): void {
      this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizadorDetail => {
                this.organizadorDetail = organizadorDetail;
            });
    }
    
  ngOnInit() {
      
        this.organizador_id = +this.route.snapshot.paramMap.get('id');  
        this.organizadorDetail = new OrganizadorDetail();            
        this.getOrganizadorDetail();
  }

}
