import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalRoutingModule } from './functional-routing.module';
import { FunctionalComponent } from './functional.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [FunctionalComponent],
  imports: [
    CommonModule,
    FunctionalRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class FunctionalModule { }
