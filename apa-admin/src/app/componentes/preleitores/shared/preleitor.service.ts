import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Preleitor } from 'src/app/model/preleitor';

@Injectable({
  providedIn: 'root'
})

export class PreleitorService {

  constructor(private db: AngularFirestore) { }

  criarPreleitor(preleitor:Preleitor){
    const postData = JSON.parse(JSON.stringify(preleitor));
    return this.db.collection('preleitores').add(postData);
  }

  getPreleitorById(preleitorId:string){
    const eventoDetails = this.db.doc<Preleitor>('preleitores/'+preleitorId).valueChanges();
    return  eventoDetails;
  }

  actualizarPreleitor(preleitorId:string,preleitor:Preleitor){
    const putData = JSON.parse(JSON.stringify(preleitor));
    return this.db.doc('preleitores/'+preleitorId).update(putData);
  }

  eliminarPreleitor(preleitorId:string){
    return this.db.doc('preleitores/'+preleitorId).delete();
  }

  listarPreleitors(): Observable<Preleitor[]>
  {
    const preleitores = this.db.collection<Preleitor>('preleitores',ref=> 
    ref.orderBy('createDate','desc'))
      .snapshotChanges().pipe(
        map(actions => {
          return actions.map(
            c => ({
              
              preleitorId:c.payload.doc.id,
              ...c.payload.doc.data()
              
            })
            );
        }));

    return preleitores;
  }
}


