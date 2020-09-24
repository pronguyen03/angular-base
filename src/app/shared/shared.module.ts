import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DataTableComponent } from './components/data-table/data-table.component';

const components = [
  DataTableComponent
];
@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    DataTableComponent
  ]
})
export class SharedModule { }
