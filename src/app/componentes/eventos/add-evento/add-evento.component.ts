import { EventoService } from './../shared/evento.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Evento } from 'src/app/model/evento';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.scss']
})
export class AddEventoComponent implements OnInit {

  @ViewChild('picker') picker: any;

  datepipe: DatePipe = new DatePipe("en-US");
  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  presencial: boolean = false;
  op = 'online';


  data = new FormControl('');
  tema = new FormControl('');
  descricao = new FormControl('');
  local = new FormControl('');



  constructor(private evento_service: EventoService) { }

  ngOnInit(): void {
  }

  changeModule(evento: any) {
    console.log(evento.value);
    if (evento.value === "On-line")
      this.presencial = false;
    else this.presencial = true;
  }

  salvarEvento() {
      if((this.data.value!=null && this.descricao.value!=null && this.tema.value!=null)&&
      (this.data.value!='' && this.descricao.value!='' && this.tema.value!=''))
      {
          const e = new Evento();
          e.data = this.data.value;
          e.descricao = this.descricao.value;
          e.tema = this.tema.value;
          e.createDate = this.datepipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');

          if(this.presencial)
          {
            e.modalidade = 'presencial';
            e.localidade = this.local.value;

          }else {
              e.modalidade = 'On-line';
          }

          this.evento_service.criarEvento(e);
          this.clearFields()
      }
  }

  clearFields()
    {
      this.local.setValue('');
      this.tema.setValue('');
      this.descricao.setValue('');
      this.data.setValue('');
    }

    cancelar()
    {
      this.clearFields();
      this.evento_service.preleitores.clear();
    }

}
