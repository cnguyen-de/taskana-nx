import { Workbasket, WorkbasketState, WorkbasketStateModel } from '@taskana/workbasket/data-access';
import { Selector } from '@ngxs/store';

export class WorkbasketSelectors {
  // Workbasket
  @Selector([WorkbasketState])
  static workbaskets(state: WorkbasketStateModel): Workbasket[] {
    return state.workbasketRepresentation.workbaskets;
  }
}
