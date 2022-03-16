import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialModules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule],
  exports: MaterialModules,
})
export class MaterialModule {}
