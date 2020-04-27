import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MidRoutingModule } from './mid-routing.module';
import { MidComponent } from './mid.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [MidComponent],
  imports: [
    CommonModule,
    MidRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MidModule { }
