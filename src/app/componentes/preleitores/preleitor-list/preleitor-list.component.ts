import { PreleitorService } from './../shared/preleitor.service';
import { Preleitor } from 'src/app/model/preleitor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-preleitor-list',
  templateUrl: './preleitor-list.component.html',
  styleUrls: ['./preleitor-list.component.scss']
})
export class PreleitorListComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  preleitores:Preleitor[]=[];
  constructor(private preleitor_service:PreleitorService) {}

  displayedColumns: string[] = ['nome', 'designacao','acao'];
  dataSource = new MatTableDataSource(this.preleitores);

  //Paginação
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  //Ordenação
  @ViewChild(MatSort) 
  sort!: MatSort;

  //Filtro
  searchKey!:string

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
 

}
