import { Component , OnInit} from '@angular/core';
import {IngrService} from '../app/ingr/ingr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:IngrService){}

  title = 's2-front-Boletas';

  ngOnInit():void{
    this.service.start();
  }

  logout(): void
  {
    this.service.logout();
  }
}
