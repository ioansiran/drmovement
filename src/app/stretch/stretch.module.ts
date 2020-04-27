import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StretchRoutingModule } from './stretch-routing.module';
import { StretchComponent } from './stretch.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [StretchComponent],
  imports: [
    CommonModule,
    StretchRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class StretchModule { }
