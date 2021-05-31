import { Component, OnInit } from '@angular/core';
import { EventoService } from '../shared/evento.service';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.scss']
})
export class ListEventosComponent implements OnInit {

  constructor(private evento_service:EventoService) { }

  ngOnInit(): void {
    
  }

}
