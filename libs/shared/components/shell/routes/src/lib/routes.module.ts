import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'taskana',
    children: []
  },
  {
    path: 'no-role',
    component: {}
  },
  {
    path: '**',
    redirectTo: '/taskana/workplace'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class RoutesModule {}
