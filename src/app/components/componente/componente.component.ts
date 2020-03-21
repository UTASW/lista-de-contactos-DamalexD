import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../../services/servicio1.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class ComponenteComponent implements OnInit {

  constructor(public servicio: Servicio1Service) { }

  ngOnInit() {

    this.servicio.arrPersonas




  }

}
