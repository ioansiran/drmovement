import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./start/start.module').then(m => m.StartModule)},
  {path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)},
  {path: 'stretch', loadChildren: () => import('./stretch/stretch.module').then(m => m.StretchModule)},
  {path: 'core', loadChildren: () => import('./mid/mid.module').then(m => m.MidModule)},
  {path: 'energize', loadChildren: () => import('./energize/energize.module').then(m => m.EnergizeModule)},
  {path: 'functional', loadChildren: () => import('./functional/functional.module').then(m => m.FunctionalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
