import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionalComponent } from './functional.component';

const routes: Routes = [{ path: '', component: FunctionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalRoutingModule { }
