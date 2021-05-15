import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetWorkbaskets } from './workbasket.actions';
import { WorkbasketService } from '../services/workbasket.service';
import { take, tap } from 'rxjs/operators';
import { WorkbasketRepresentation } from '../models/workbasket-representation';

export interface WorkbasketStateModel {
  workbasketRepresentation: WorkbasketRepresentation;
}

@State<WorkbasketStateModel>({
  name: 'workbasket',
  defaults: {
    workbasketRepresentation: {}
  }
})
@Injectable()
export class WorkbasketState {
  constructor(private workbasketService: WorkbasketService) {}

  @Action(GetWorkbaskets)
  getWorkbaskets(ctx: StateContext<WorkbasketStateModel>) {
    return this.workbasketService.getWorkbaskets().pipe(
      take(1),
      tap((workbasketRepresentation) => {
        ctx.patchState({ workbasketRepresentation });
      })
    );
  }
}
