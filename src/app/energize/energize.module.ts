import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnergizeRoutingModule } from './energize-routing.module';
import { EnergizeComponent } from './energize.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [EnergizeComponent],
  imports: [
    CommonModule,
    EnergizeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class EnergizeModule { }
