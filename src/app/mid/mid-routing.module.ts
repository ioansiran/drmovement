import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidComponent } from './mid.component';

const routes: Routes = [{ path: '', component: MidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidRoutingModule { }
