import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'taskana',
        loadChildren: async () => (await import('@taskana/shared/components/shell/ui/layout')).LayoutModule
      },
      {
        path: 'administration',
        children: [
          {
            path: 'workbaskets',
            loadChildren: async () => (await import('@taskana/workbasket/feature/workbasket-list')).WorkbasketListModule
          }
        ]
      }
    ]
  },
  {
    path: 'no-role',
    //component: {}
    redirectTo: '/taskana/workplace'
  },
  {
    path: '**',
    redirectTo: '/taskana/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutesModule {}
