import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetWorkbaskets } from './workbasket.actions';
import { WorkbasketService } from '../services/workbasket.service';
import { take, tap } from 'rxjs/operators';

export interface WorkbasketStateModel {
  workbaskets: number[];
}

@State<WorkbasketStateModel>({
  name: 'workbasket',
  defaults: {
    workbaskets: []
  }
})
@Injectable()
export class WorkbasketState {
  constructor(private workbasketService: WorkbasketService) {
    console.log('created');
  }

  @Action(GetWorkbaskets)
  getWorkbaskets(ctx: StateContext<WorkbasketStateModel>) {
    return this.workbasketService.getWorkbaskets().pipe(
      take(1),
      tap((workbaskets) => {
        ctx.patchState({ workbaskets });
      })
    );
  }
}
