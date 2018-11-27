import { Component , OnInit, ViewChild} from '@angular/core';
import {IngrService} from '../app/ingr/ingr.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Organizador} from '../app/organizador/organizador';
import {OrganizadorService} from '../app/organizador/organizador.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:IngrService, private organizadorService:OrganizadorService, private router:Router){}

  title = 's2-front-Boletas';

  model:any;

  organizador:Organizador;

  organizadores : Organizador[];

  @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

  ngOnInit():void{
    this.service.start();
    this.getOrganizadores();
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        map(term => (term === '' ? this.organizadores
            : this.organizadores.filter(organizador => organizador.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
}
formatter = (x: {nombre: string}) => x.nombre;

getOrganizadores(): void {
  this.organizadorService.getOrganizadores().subscribe(organizador => {
      this.organizadores = organizador;

  });
}

busqueda(): void {
  if (this.model != undefined && this.model.id != undefined) {
    this.organizador = this.model;
      
      this.model = undefined;
}

  
  this.router.navigate(['/organizadores/'+ this.organizador.id]);
  this.model = undefined;
  this.getOrganizadores();
  this.organizador = undefined;
}

  logout(): void
  {
    this.service.logout();
  }
}
