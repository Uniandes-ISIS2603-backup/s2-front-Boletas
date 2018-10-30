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

  constructor(private organizadorService: OrganizadorService, private route:ActivatedRoute) { }
  
  organizador_id:number;
  
  @Input()  organizadorDetail : OrganizadorDetail;

  getOrganizadorDetail(): void {
      this.organizadorService.getOrganizadorDetail(this.organizador_id)
            .subscribe(organizadorDetail => {
                this.organizadorDetail = organizadorDetail;
            });
    }
    
  ngOnInit() {
      
        this.organizador_id = +this.route.snapshot.paramMap.get('id');  
        //this.organizadorDetail = new OrganizadorDetail();            
        this.getOrganizadorDetail();
  }

}
