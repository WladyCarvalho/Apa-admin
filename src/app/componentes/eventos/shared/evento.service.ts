
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Evento } from 'src/app/model/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private db: AngularFirestore) { }

  criarEvento(evento:Evento){
    const postData = JSON.parse(JSON.stringify(evento));
    return this.db.collection('eventos').add(postData);
  }

  getEventById(eventoId:string){
    const eventoDetails = this.db.doc<Evento>('eventos/'+eventoId).valueChanges();
    return  eventoDetails;
  }

  actualizarEvento(eventoId:string,evento:Evento){
    const putData = JSON.parse(JSON.stringify(evento));
    return this.db.doc('eventos/'+eventoId).update(putData);
  }

  eliminarEvento(eventoId:string){
    return this.db.doc('eventos/'+eventoId).delete();
  }

  listarEventos(): Observable<Evento[]>{
    const eventos = this.db.collection<Evento>('eventos',ref=> 
    ref.orderBy('createDate','desc'))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(
            c => ({
              eventoId:c.payload.doc.id,
              ...c.payload.doc.data()
            }));
        }));
    return eventos;
  }


}
