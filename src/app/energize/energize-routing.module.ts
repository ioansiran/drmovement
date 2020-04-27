import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergizeComponent } from './energize.component';

const routes: Routes = [{ path: '', component: EnergizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnergizeRoutingModule { }
