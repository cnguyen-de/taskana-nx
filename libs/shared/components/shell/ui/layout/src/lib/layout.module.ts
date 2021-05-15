import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '@taskana/shared/components/shell/ui/navbar';

const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'administration',
        children: [
          {
            path: 'workbaskets',
            loadChildren: async () => (await import('@taskana/workbasket/feature/workbasket-list')).WorkbasketListModule
          }
        ]
      },
      {
        path: 'workplace',
        //TODO change to task-list
        loadChildren: async () => (await import('@taskana/workbasket/feature/workbasket-list')).WorkbasketListModule
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule, NavbarModule, RouterModule.forChild(routes)],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
