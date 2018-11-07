import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { ComentarioService } from '../comentario.service';
import {Espectaculo} from 'src/app/espectaculo/espectaculo';
import {EspectaculoService} from 'src/app/espectaculo/espectaculo.service';
import {EspectaculoDetail} from 'src/app/espectaculo/espectaculo-detail';
import {Cliente} from 'src/app/cliente/cliente';
import {ClienteService} from 'src/app/cliente/cliente.service';
import {ClienteDetail} from 'src/app/cliente/cliente-detail';
import { Comentario } from '../comentario';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css'],
    providers : [DatePipe]
})
export class ComentarioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService El proveedor de servicios del comentario
    * @param toastrService The toastr to show messages to the user
    * @param espectaculoService El proveedor de servicios de espectaculo (necesario para obtener los espectaculos y mostrarlos en un selector)
    * @param clienteService El proveedor de servicios de cliente (necesario para obtener los clientes y mostrarlos en un selector)
    */
    constructor(
        
        private comentarioService: ComentarioService,
        private toastrService: ToastrService,
        private espectaculoService: EspectaculoService,
        private clienteService: ClienteService
        
    ) { }

    /**
     * La lista de espectaculos para escoger
     */
     @Input() espectaculos: Espectaculo[];
     
     
     /**
      * La lista de clientes para escoger
      */
      @Input() clientes: Cliente[];
      
      /**
       * El identificador del cliente
       */
       cliente_id: number;
       
     
       
    /**
     * El identificador del espectaculo
     */
     espectaculo_id: number;
     
    
    
    /**
    * El nuevo comentario
    */
    comentario: Comentario;

    /**
    * El boton que señala que ya no se quiere crear una boleta
    */
    @Output() cancel = new EventEmitter();

    /**
    * La funcion que señala que se creó una nueva boleta
    */
    @Output() create = new EventEmitter();
 
    /**
    * Crea un comentario
    */
    createComentario(): Comentario {  
        console.log(this.espectaculo_id);
        this.comentario.espectaculo = new Espectaculo();
        this.comentario.cliente = new Cliente();
        this.comentario.espectaculo.id = this.espectaculo_id; 
        this.comentario.cliente.id = this.cliente_id;
        console.log(this.comentario)
        this.comentarioService.createComentario(this.comentario)
            .subscribe((comentario) => {
                this.comentario = comentario;
                this.create.emit();
                this.toastrService.success("El comentario fue creado", "Creacion del comrentario");     
            });
            
            return this.comentario;
    }

    /**
    * Emite la señal para decirle al componente padre que el usuario ya no quiere crear una boleta
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    /**
     * Obtiene todos los espectaculos en la base de datos
     */
     getEspectaculos():void{
      this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
      }
      
     /**
     * Obtiene todos los clientes en la base de datos
     */
     getClientes():void{
      this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
      }
      

    /**
    * Esta funcion inicializa el componente
    */
    ngOnInit() {
        this.comentario = new Comentario();
        this.getEspectaculos();
        this.getClientes();
        
    }

}


