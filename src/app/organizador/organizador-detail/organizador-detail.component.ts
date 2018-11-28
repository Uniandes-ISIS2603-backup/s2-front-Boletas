import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {OrganizadorDetail} from '../organizador-detail';
import {OrganizadorService} from '../organizador.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {

  /**
   * Constructor del componente de organizador Detail, declara el servicio que lo provee y el router
   */
  constructor(private organizadorService: OrganizadorService, 
    private route:ActivatedRoute, private modalDialog: ModalDialogService, 
    private viewRef: ViewContainerRef,
    private router: Router, private toastrService:ToastrService) { }
  
  
  /**
   * El id que entra por parametro
   */
  organizador_id:number;
  
  
  /**
   * El organizador que se eligio
   */
  @Input() organizadorDetail : OrganizadorDetail;


  showEdit:boolean;


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
        this.showEdit = true;
        console.log(this.organizadorDetail);
  }

  deleteOrganizador(): void {
    this.modalDialog.openDialog(this.viewRef, {
        title: 'Cancelar Suscripcion',
        childComponent: SimpleModalComponent,
        data: {text: 'Esta seguro de borrar su cuenta?'},
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.organizadorService.deleteOrganizador(this.organizador_id).subscribe(organizador => {
                        this.router.navigate(['organizadores/list']);
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    });
}


}
