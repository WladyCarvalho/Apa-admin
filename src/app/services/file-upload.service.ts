import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventoService } from '../componentes/eventos/shared/evento.service';
import { FileUpload } from '../model/fileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private evento_service:EventoService) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number|undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.nome = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    //this.db.list(this.basePath).push(fileUpload);
    const tmp_preleitor = this.evento_service.preleitores.get(fileUpload.owner_key);
          tmp_preleitor!.photo_url = fileUpload.url!;
          tmp_preleitor!.photo_name = fileUpload.nome;
          
    this.evento_service.preleitores.set(tmp_preleitor!.preleitorId!,tmp_preleitor!);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.nome);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
