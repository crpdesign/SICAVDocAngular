import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatCheckboxModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatToolbarModule],
  exports: [CommonModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatToolbarModule]
})
export class MaterialModule {}
