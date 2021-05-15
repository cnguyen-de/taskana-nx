import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetWorkbaskets, SelectWorkbasket, Workbasket, WorkbasketSelectors } from '@taskana/workbasket/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'taskana-workbasket-list',
  templateUrl: './workbasket-list.component.html',
  styleUrls: ['./workbasket-list.component.scss']
})
export class WorkbasketListComponent implements OnInit {
  @Select(WorkbasketSelectors.workbaskets) workbaskets$: Observable<Workbasket[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetWorkbaskets());
  }

  selectWorkbasket(workbasketId: string) {
    this.store.dispatch(new SelectWorkbasket(workbasketId));
  }
}
