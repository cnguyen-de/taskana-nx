import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetWorkbaskets } from '@taskana/workbasket/data-access';

@Component({
  selector: 'taskana-workbasket-list',
  templateUrl: './workbasket-list.component.html',
  styleUrls: ['./workbasket-list.component.scss']
})
export class WorkbasketListComponent implements OnInit {

  workbaskets = []

  constructor(private store: Store) {
    this.store.select(state => state.workbasket.workbaskets).subscribe(workbaskets => {
      this.workbaskets = workbaskets
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(new GetWorkbaskets())
    }, 2000)
  }

}
