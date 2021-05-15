import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbasketListComponent } from './workbasket-list/workbasket-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: WorkbasketListComponent }])],
  declarations: [WorkbasketListComponent],
  exports: [WorkbasketListComponent]
})
export class WorkbasketListModule {}
