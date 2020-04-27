import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class StartModule { }
