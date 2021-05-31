import { FileUploadService } from './../../../../services/file-upload.service';
import { EventoService } from './../../shared/evento.service';
import { Preleitor } from 'src/app/model/preleitor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PreleitorService } from 'src/app/componentes/preleitores/shared/preleitor.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { FileUpload } from 'src/app/model/fileUpload';


@Component({
  selector: 'app-add-list-preleitores',
  templateUrl: './add-list-preleitores.component.html',
  styleUrls: ['./add-list-preleitores.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AddListPreleitoresComponent implements OnInit {
  


  private unsubscribe$ = new Subject<void>();
  preleitores:Preleitor[]=[];
  tmp_preleitor:Preleitor = new Preleitor();

  tema = new FormControl('');

  //Upload da imagem
  arquivoSelecionado!: FileList;
  arquivoActual!: FileUpload;
  percentagem!: number;

  constructor(
    private preleitor_service:PreleitorService, 
    private event_service:EventoService,
    private upload_service:FileUploadService) {}

  displayedColumns: string[] = ['nome', 'designacao'];
  dataSource = new MatTableDataSource(this.preleitores);
  expandedElement!: Preleitor;

  
  selecao = new SelectionModel<Preleitor>(true, []);

  //Paginação
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  //Ordenação
  @ViewChild(MatSort) 
  sort!: MatSort;

  //Filtro
  searchKey!:string

  //File uploader
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    theme: "dragNDrop",
    fileNameIndex: true,
    hideProgressBar: true,
    hideResetBtn: true,
    uploadAPI: {
      url:"https://example-file-upload-api"
    },
    replaceTexts: {
      selectFileBtn: 'Selecionar imagem',
      resetBtn: 'Reset',
      uploadBtn: 'Carregar',
      dragNDropBox: 'Arrastar e colar',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Carregado com sucesso !',
      afterUploadMsg_error: 'Carregamento falhado!',
      sizeLimit: 'Size Limit'
    }
};

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  ngAfterViewInit () {
     this.dataSource.paginator = this .paginator;
     this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getAllpreleitores();
  }

  getAllpreleitores(){
    this.preleitor_service.listarPreleitors().pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      result => {
       this.dataSource.data=result;
       this.dataSource.paginator = this .paginator;
       this.dataSource.sort = this.sort;
       console.log(result)
      }
    );
  }

  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }


  onDeleteConfirm(id:string): void {
    this.preleitor_service.eliminarPreleitor(id);
  }


   /** Quando o número de elementos selecionados condiz com a quantidade total de elementos na lista. */
   isAllSelected() {
    const numSelected = this.selecao.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selecione todos os registros se não estiverem selecionad; do contrário limpa a seleção. */
  masterToggle() {
    this.isAllSelected() ?
        this.selecao.clear() :
        this.dataSource.data.forEach(row => this.selecao.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Preleitor): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selecao.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
  }


  clicou(p:Preleitor){
      this.tmp_preleitor = p
  }

  setTema(){
    if(this.tema.value!=null || this.tema.value!=''){
      this.tmp_preleitor.tema = this.tema.value;
      this.tema.setValue('');
      this.event_service.setPreleitor(this.tmp_preleitor);
    }
    console.log(this.tmp_preleitor.nome);
    console.log(this.tmp_preleitor.tema);
       
  }

  //Upload de arquivo

  selectFile($event: any): void {
    this.arquivoSelecionado = $event.target.files;
   console.log($event.target.files);
  }

  
  upload(): void {
    const file = this.arquivoSelecionado!.item(0);

    this.arquivoActual = new FileUpload(file!);
    this.arquivoActual.owner_key = this.tmp_preleitor.preleitorId!;
    this.arquivoActual.nome = this.arquivoActual.nome;

    this.upload_service.pushFileToStorage(this.arquivoActual).subscribe(
      percentage => {
        this.percentagem = Math.round(percentage!);
      },
      error => {
        console.log(error);
      }
    );
  }
  

}
