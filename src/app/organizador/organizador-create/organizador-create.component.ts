import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { OrganizadorService } from '../organizador.service';

import { Organizador } from '../organizador';

import {Router} from '@angular/router';

@Component({
    selector: 'app-organizador-create',
    templateUrl: './organizador-create.component.html',
    styleUrls: ['./organizador-create.component.css'],
})
export class OrganizadorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param OrganizadorService El provedor de servicios de organizador
    * @param toastrService El toastr para mostrar mensajes al usuario
    */
    constructor(
        private organizadorService: OrganizadorService,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    /**
    * El organizador nuevo 
    */
    organizador: Organizador;
    

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an organizador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new organizador
    */
    @Output() create = new EventEmitter();

    /**
    * Crea un organizador
    */
    createOrganizador(): Organizador {
        this.organizadorService.createOrganizador(this.organizador).subscribe((organizador) => {
          this.organizador = organizador;
          this.create.emit();
          this.toastrService.success("El organizador fue creado", "Creacion organizador")})
            
      return this.organizador;
  }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an organizador
    */
    cancelCreation(): void {
              this.toastrService.warning('El organizador no fue creado ', 'Organizador creation');
        this.router.navigate(['/organizadores/list']);
    }

    /**
    * Funcion que inicializa el componente
    */
    ngOnInit() {
        this.organizador = new Organizador();
    }

}
