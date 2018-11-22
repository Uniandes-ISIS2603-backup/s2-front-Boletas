import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

import {OrganizadorService} from '../organizador.service';
import {OrganizadorDetail} from '../organizador-detail';
import {Organizador} from '../organizador';

@Component({
  selector: 'app-organizador-edit',
  templateUrl: './organizador-edit.component.html',
  styleUrls: ['./organizador-edit.component.css']
})
export class OrganizadorEditComponent implements OnInit {

  constructor(private organizadorService: OrganizadorService, private route : ActivatedRoute,
  private toastrService: ToastrService,
  private router : Router
  ) { }


  model : any;
  /**
   * El organizador que va a ser editado
   */
  organizador: OrganizadorDetail;

  organizador_id: number;

  getOrganizador(): void {
    this.organizadorService.getOrganizadorDetail(this.organizador_id).subscribe( organizador =>{this.organizador = organizador}
    );
  }

  cancelarEdicion(): void {
    this.toastrService.warning('El organizador no se edito');
    this.router.navigate(['/organizadores/'+ this.organizador_id]);
  }
  

  updateOrganizador():void {
    this.organizadorService.updateOrganizador(this.organizador).subscribe(
      () => {this.router.navigate(['/organizadores/' + this.organizador_id]);
      this.toastrService.success('El organizador se a modificado correctamente');
    });
  }

  ngOnInit() {

    this.organizador_id = +this.route.snapshot.paramMap.get('id');  
    this.organizador = new OrganizadorDetail();
    this.getOrganizador();
    console.log(this.organizador);
    this.model = new Organizador();
  }

}
