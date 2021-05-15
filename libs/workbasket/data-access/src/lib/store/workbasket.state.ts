import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetWorkbaskets, SelectWorkbasket } from './workbasket.actions';
import { WorkbasketService } from '../services/workbasket.service';
import { take, tap } from 'rxjs/operators';
import { WorkbasketRepresentation, Workbasket } from '../models';

export interface WorkbasketStateModel {
  workbasketRepresentation: WorkbasketRepresentation;
  selectedWorkbasket: Workbasket;
}

@State<WorkbasketStateModel>({
  name: 'workbasket',
  defaults: {
    workbasketRepresentation: {},
    selectedWorkbasket: {}
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

  @Action(SelectWorkbasket)
  selectWorkbasket(ctx: StateContext<WorkbasketStateModel>, { workbasketId }: SelectWorkbasket) {
    return this.workbasketService.getWorkbasketById(workbasketId).pipe(
      take(1),
      tap((selectedWorkbasket) => {
        ctx.patchState({ selectedWorkbasket });
      })
    );
  }
}
