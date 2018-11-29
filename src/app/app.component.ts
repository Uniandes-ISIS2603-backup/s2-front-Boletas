import { Component , OnInit, ViewChild} from '@angular/core';
import {IngrService} from '../app/ingr/ingr.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Organizador} from '../app/organizador/organizador';
import {Espectaculo} from '../app/espectaculo/espectaculo';
import {OrganizadorService} from '../app/organizador/organizador.service';
import {EspectaculoService} from '../app/espectaculo/espectaculo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:IngrService, private organizadorService:OrganizadorService,
    private espectaculoService:EspectaculoService, private router:Router){}

  title = 's2-front-Boletas';

  model:any;

  organizador:Organizador;

  espectaculo: Espectaculo;

  organizadores : Organizador[];

  espectaculos :Espectaculo[];

  nombres: string[];

  @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

  ngOnInit():void{
    this.service.start();
    this.getOrganizadores();
    this.getEspectaculos();
    this.nombres = new Array();
   // this.addNombres();
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map(term => (term === '' ? this.espectaculos
            : this.espectaculos.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
}
formatter = (x: {nombre: string}) => x.nombre;

async getOrganizadores(){
  this.organizadorService.getOrganizadores().subscribe(organizador => {
      this.organizadores = organizador;
  });
  
  await new Promise((resolve) => setTimeout(resolve,300000000000000000000000000000000000000000));
}

async getEspectaculos(){
  this.espectaculoService.getEspectaculos().subscribe(espectaculos => this.espectaculos = espectaculos);
  
  await new Promise((resolve) => setTimeout(resolve,30000000000000000000000000000000));
}

addNombres():void
{
  
  for(let i of this.espectaculos)
  {
    this.nombres.push(i.nombre);
  }
  for(let item of this.organizadores)
  {
    this.nombres.push(item.nombre);
  }
}

busqueda(): void {
  if (this.model != undefined && this.model.id != undefined) {
    var es: boolean = true;
    this.espectaculo = this.model;
    
      this.model = undefined;
}

  if(es)
  {
    this.router.navigate(['/espectaculos/'+ this.espectaculo.id]);
  }
  else{
    this.router.navigate(['/organizadores/'+ this.organizador.id]);
  }
  
  this.model = undefined;
  this.getOrganizadores();
  this.getEspectaculos();
  this.organizador = undefined;
}

  logout(): void
  {
    this.service.logout();
  }
}
