import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PreleitorService } from '../componentes/preleitores/shared/preleitor.service';
import { DialogoEditPreleitorComponent } from '../dialogo-edit-preleitor/dialogo-edit-preleitor.component';
import { Preleitor } from '../model/preleitor';

@Component({
  selector: 'app-dialogo-eliminar-confirm',
  templateUrl: './dialogo-eliminar-confirm.component.html',
  styleUrls: ['./dialogo-eliminar-confirm.component.scss']
})
export class DialogoEliminarConfirmComponent implements OnInit {

  constructor( private preleitor_service:PreleitorService
    , public dialogRef:MatDialogRef<DialogoEliminarConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public dado:Preleitor, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  confirmEliminar()
  {
    this.preleitor_service.eliminarPreleitor(this.dado.preleitorId!);
    this.dialogRef.close();
    this.openSnackBar();
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.open('Eliminado com sucesso!', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
