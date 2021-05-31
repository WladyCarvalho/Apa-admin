import { Social } from './../../../model/social';
import { Preleitor } from 'src/app/model/preleitor';
import { PreleitorService } from './../shared/preleitor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-preleitor',
  templateUrl: './preleitor.component.html',
  styleUrls: ['./preleitor.component.scss'],
  providers: [DatePipe]
})
export class PreleitorComponent implements OnInit {
  isLinear = false;
  
  nome = new FormControl('');
  designacao = new FormControl('');
  datepipe: DatePipe = new DatePipe("en-US");
  facebook = new FormControl('');
  instagram = new FormControl('');
  twitter = new FormControl('');
  linkdin = new FormControl('');


  constructor(private preleitor_service:PreleitorService,private _snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
  }

  salvarPreleitor(){

    const p = new Preleitor();

    const f = new Social();
    const t = new Social();
    const i = new Social();
    const l = new Social();

    if((this.nome.value!=null && this.designacao.value!=null) && (this.nome.value!='' && this.designacao.value!='')){
      
      f.descricao = 'facebook';
      f.link = this.facebook.value;
      
      i.descricao = 'instagram';
      i.link = this.instagram.value;
      
      t.descricao = 'twitter';
      t.link = this.twitter.value;
      
      l.descricao = 'linkdin';
      l.link = this.linkdin.value;
      
      const socials = [f,t,i,l];
  
      p.nome = this.nome.value;
      p.designacao = this.designacao.value;
      p.socials = socials;
      p.createDate = this.datepipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
      this.preleitor_service.criarPreleitor(p);
      this.clearFields();
      this.openSnackBar();
      
  
    }else{

    }
    

  }

  clearFields(){

    this.designacao.setValue('');
    this.nome.setValue('');
    this.facebook.setValue('');
    this.instagram.setValue('');
    this.twitter.setValue('');
    this.linkdin.setValue('');

  }

  openSnackBar() {
    this._snackBar.open('Preleitor inserido com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
