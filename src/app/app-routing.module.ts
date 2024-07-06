import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clock',
    pathMatch: 'full',
  },
  {
    path: 'clock',
    loadChildren: () =>
      import('./digital-clock/digital-clock.module').then((m) => m.ClockModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
