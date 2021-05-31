import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PreleitorService } from '../componentes/preleitores/shared/preleitor.service';
import { Preleitor } from '../model/preleitor';
import { Social } from '../model/social';

@Component({
  selector: 'app-dialogo-edit-preleitor',
  templateUrl: './dialogo-edit-preleitor.component.html',
  styleUrls: ['./dialogo-edit-preleitor.component.scss']
})
export class DialogoEditPreleitorComponent implements OnInit {


  isLinear = false;
  
  nome = new FormControl('');
  designacao = new FormControl('');
  datepipe: DatePipe = new DatePipe("en-US");
  facebook = new FormControl('');
  instagram = new FormControl('');
  twitter = new FormControl('');
  linkdin = new FormControl('');

  constructor(private preleitor_service:PreleitorService
  ,
    public dialogRef:MatDialogRef<DialogoEditPreleitorComponent>,
      @Inject(MAT_DIALOG_DATA) public dado:Preleitor, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.nome.setValue(this.dado.nome);
    this.designacao.setValue(this.dado.designacao);
    this.facebook.setValue(this.dado.socials[0].link);
    this.twitter.setValue(this.dado.socials[1].link);
    this.instagram.setValue(this.dado.socials[2].link);
    this.linkdin.setValue(this.dado.socials[3].link);
  }

  salvar(){

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
      //p.createDate = this.datepipe.transform(Date.now(), 'MM-dd-yyyy HH:mm');
      this.preleitor_service.actualizarPreleitor(this.dado.preleitorId!,p);
      this.dialogRef.close();
      this.openSnackBar()
  }
}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.open('Actualizado com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
