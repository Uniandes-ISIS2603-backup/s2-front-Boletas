import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {SillaService} from '../silla.service';
import {Silla} from '../silla';

@Component({
  selector: 'app-silla-create',
  templateUrl: './silla-create.component.html',
  styleUrls: ['./silla-create.component.css']
})
export class SillaCreateComponent implements OnInit {

/**
 * Constructor de la clase.
 */
  constructor(
  private sillaService: SillaService,
  private toastrService: ToastrService) { }
  
  silla: Silla;
  
  /**
   * Atributos correspondientes a los eventos lanzados por los botones de el panel de crear Silla.
   */
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter();
  
  /**
   * Método que crea una silla
   */
  createSilla():Silla
  {
      console.log(this.silla);
       this.sillaService.createSilla(this.silla)
            .subscribe((silla) => {
                this.silla = silla;
                this.create.emit();
                this.toastrService.success("La silla fue creada", "Silla creation");
                
            });
            return this.silla;
  }
  /**
   * Método generado por la cancelación de la ceración de silla.
   */
  cancelCreation():void
  {
      this.cancel.emit();
  }
  ngOnInit() {
      this.silla = new Silla();
  }

}
