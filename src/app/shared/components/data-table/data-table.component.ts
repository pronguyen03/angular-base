import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  // 'select', 'position', 'name', 'weight', 'symbol', 'functional'
  ELEMENT_DATA = ELEMENT_DATA;
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol', 'functional'];
  columns: { key: string, display: string }[] = [
    { key: 'select', display: '' },
    { key: 'position', display: 'No.' },
    { key: 'name', display: 'Name' },
    { key: 'weight', display: 'Weight' },
    { key: 'symbol', display: 'Symbol' },
    { key: 'functional', display: '' },
    // 'select', 'position', 'name', 'weight', 'symbol', 'functional'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Pagination */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onView(element: any): void {
    console.log('Viewing', element);
  }

  onEdit(element: any): void {
    console.log('Viewing', element);
  }

  onDelete(element: any): void {
    console.log('Viewing', element);
  }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        tap(() => this.loadDataByPage())
      )
      .subscribe();
  }

  loadDataByPage() {
    //   this.dataSource.fetchData(
    //       this.course.id,
    //       '',
    //       'asc',
    //       this.paginator.pageIndex,
    //       this.paginator.pageSize);
  }
}
