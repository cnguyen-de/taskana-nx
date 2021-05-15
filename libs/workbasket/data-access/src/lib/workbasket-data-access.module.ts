import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbasketState } from './store/workbasket.state';
import { WorkbasketActions } from './store/workbasket.actions';
import { WorkbasketService } from './services/workbasket.service';

@NgModule({
  imports: [CommonModule],
  providers: [WorkbasketService],
  exports: []
})
export class WorkbasketDataAccessModule {}
