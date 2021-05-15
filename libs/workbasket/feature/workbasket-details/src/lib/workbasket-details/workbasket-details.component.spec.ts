import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbasketDetailsComponent } from './workbasket-details.component';

describe('WorkbasketDetailsComponent', () => {
  let component: WorkbasketDetailsComponent;
  let fixture: ComponentFixture<WorkbasketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbasketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbasketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
