import { PreleitorService } from './componentes/preleitores/shared/preleitor.service';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './componentes/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './componentes/card/card.component';
import { EventoDashComponent } from './componentes/evento-dash/evento-dash.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { PreleitoresComponent } from './componentes/preleitores/preleitores.component';
import { EventoComponent } from './componentes/eventos/evento/evento.component';
import { PreleitorComponent } from './componentes/preleitores/preleitor/preleitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { PreleitorListComponent } from './componentes/preleitores/preleitor-list/preleitor-list.component';
import { AddEventoComponent } from './componentes/eventos/add-evento/add-evento.component';
import { ListEventosComponent } from './componentes/eventos/list-eventos/list-eventos.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddListPreleitoresComponent } from './componentes/eventos/add-evento/add-list-preleitores/add-list-preleitores.component';
import { DialogoEditPreleitorComponent } from './dialogo-edit-preleitor/dialogo-edit-preleitor.component';
import { DialogoEliminarConfirmComponent } from './dialogo-eliminar-confirm/dialogo-eliminar-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    EventoDashComponent,
    EventosComponent,
    PreleitoresComponent,
    EventoComponent,
    PreleitorComponent,
    PreleitorListComponent,
    AddEventoComponent,
    ListEventosComponent,
    AddListPreleitoresComponent,
    DialogoEditPreleitorComponent,
    DialogoEliminarConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule ,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    AngularFileUploaderModule
  ],
  providers: [PreleitorService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
