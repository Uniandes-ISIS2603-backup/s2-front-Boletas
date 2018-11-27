import { Component, OnInit , Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {ClienteDetail} from '../cliente-detail';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit, OnChanges {

  constructor(private clienteService: ClienteService, private router:Router, private toastrService:ToastrService , private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) =>
      {
          if (e instanceof NavigationEnd)
          {
              this.ngOnInit();
          }
      });
  }

  navigationSubscription;

  model:any;

  @Input() clienteDetail: ClienteDetail;

  @Output() cancel = new EventEmitter();

  @Output() update = new EventEmitter();

  cliente_id: number;


  getCliente(): void {
    this.clienteService.getClienteDetail(this.cliente_id).subscribe( cliente =>{this.clienteDetail = cliente}
    );
  }

  cancelarEdicion(): void {
    this.toastrService.warning('No se edito el cliente');
    this.cancel.emit();
    this.router.navigate(['/clientes/'+ this.cliente_id]);
  }
  

  updateCliente():void {
    this.clienteService.updateCliente(this.clienteDetail).subscribe(
      () => {this.router.navigate(['/clientes/list']);
      this.toastrService.success('El cliente se a modificado correctamente');
    });
    this.update.emit();
  }

  ngOnInit() {

    this.cliente_id = +this.route.snapshot.paramMap.get('id');  
    this.clienteDetail = new ClienteDetail();
    this.getCliente();
    console.log(this.clienteDetail);
    this.model = new Cliente();
  }

  ngOnChanges() {
    this.ngOnInit();
}

}
