import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbasketDetailsComponent } from './workbasket-details/workbasket-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WorkbasketDetailsComponent],
  exports: [WorkbasketDetailsComponent]
})
export class WorkbasketDetailsModule {}
