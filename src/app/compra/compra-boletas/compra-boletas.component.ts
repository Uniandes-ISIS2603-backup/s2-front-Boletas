import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {CompraService} from '../compra.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ClienteService} from '../../cliente/cliente.service';
import {SillaService} from '../../silla/silla.service';
import {BoletaService} from '../../boleta/boleta.service';

import { ToastrService } from 'ngx-toastr';
import {Boleta} from '../../boleta/boleta';
import {Compra} from '../compra';
import {Cliente} from '../../cliente/cliente';
import {Silla} from '../../silla/silla';

@Component({
  selector: 'app-compra-boletas',
  templateUrl: './compra-boletas.component.html',
  styleUrls: ['./compra-boletas.component.css']
})
export class CompraBoletasComponent implements OnInit {

  constructor(private compraService:CompraService,
     private route: ActivatedRoute,
      private toastrService:ToastrService,
      private clienteService: ClienteService,
      private sillaService: SillaService,
      private boletaService:BoletaService,
    private router:Router) { }

  boletas: Boleta[];

  clientes:Cliente[];

  sillas: Silla[];

  compra:Compra;

  envio:boolean;

  cliente_id: number;
  @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();


  ngOnInit() {
    this.compra = new Compra();
    this.boletas = new Array();
    this.sillaService.s.subscribe(silla => this.sillas = silla);
    var pSillas =<Array<Silla>> this.sillas;
    this.sillas = pSillas;
    console.log(pSillas);
    this.getClientes();
    this.getBoletas();
    this.compra.costoTotal = 0;
    this.compra.direccion = '';
    //  this.buscarBoletas(pSillas);
      
  }

  checkBoxCompra (): boolean {
    var element = <HTMLInputElement> document.getElementById("compraEnvio");
    var isChecked = element.checked;
    return isChecked;
}

  deleteItem(index):void{
    this.boletas.splice(index,1);
  }
  total:number;
  suma(precio):boolean
  {
    this.total += precio
    return true;
  }

  getTotal():number
  {
    return this.total;
  }

  comprar():Compra{

    var cliente: Cliente ;
    for(let item of this.clientes)
    {
      if(item.id === this.cliente_id){
        cliente = item;
        console.log("entre");
      }
      console.log(this.cliente_id === item.id);
    }
    
    if(cliente != undefined)
    {
      this.compra.costoTotal = this.getTotal();
      this.compra.cliente = cliente;
      this.compra.fecha = new Date();
      this.compra.estado = false;
      console.log(this.compra);
      this.compraService.createCompra(this.compra)
            .subscribe((compra) => {
                this.compra = compra;  
                console.log(compra.id);   
      });
      console.log(this.compra.id);
      this.compraService.updateBCompra(this.compra.id, this.boletas).subscribe();

      this.create.emit();
      this.toastrService.success("La compra fue creada", "Crear Compra"); 
      this.router.navigate(['/compras/list']);
      return this.compra;
    }
    else{
      this.toastrService.error("No se encontro el usuario");
    }
    
    
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => {this.clientes= clientes;});
}


  cancelCreation(): void {
    this.cancel.emit();
    this.router.navigate(['/compras/list']);
  }

  getBoletas(): void{
    this.boletaService.getBoletas().subscribe(boletas => this.boletas = boletas);
  }

  esta(id):boolean
  {
    for(let item of this.sillas)
    {
      if(id === item.id)
      {
        return true;
      }
    }
    return false;
  }

  buscarBoletas(sillas)
  {
    for(let item of this.boletas)
    {
      
      var esta: boolean = false;
      for(let i of sillas)
      {
        if(item.silla.id === i.id)
        {
          esta = true;
        }
      }
      if(!esta)
      {
        this.boletas.splice( this.boletas.indexOf(item),1);
      }
    }
  }
}
