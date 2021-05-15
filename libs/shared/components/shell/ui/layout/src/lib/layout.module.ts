import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '@taskana/shared/components/shell/ui/navbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    RouterModule.forChild([{ path: '', component: LayoutComponent }])
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
