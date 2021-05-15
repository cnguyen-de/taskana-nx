import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbasketService } from './services/workbasket.service';

@NgModule({
  imports: [CommonModule],
  providers: [WorkbasketService],
  exports: []
})
export class WorkbasketDataAccessModule {}
