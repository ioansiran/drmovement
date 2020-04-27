import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StretchComponent } from './stretch.component';

const routes: Routes = [{ path: '', component: StretchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StretchRoutingModule { }
