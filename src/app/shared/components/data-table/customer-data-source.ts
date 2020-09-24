import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';

export class CustomerDataSource implements DataSource<any> {
  private dataSubject = new BehaviorSubject<any[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor() { }
  connect(collectionViewer: CollectionViewer): Observable<any[] | readonly any[]> {
    return this.dataSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  }

  // fetchData(apiUrl: string): void {
  //   this.loadingSubject.next(true);
  //   this.
  // }
}
