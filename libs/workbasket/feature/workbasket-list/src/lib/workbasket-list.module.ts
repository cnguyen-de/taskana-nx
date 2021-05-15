import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbasketListComponent } from './workbasket-list/workbasket-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WorkbasketListComponent],
  exports: [WorkbasketListComponent]
})
export class WorkbasketListModule {}
