import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHolidayListComponent } from './worker-holiday-list.component';

describe('WorkerHolidayListComponent', () => {
  let component: WorkerHolidayListComponent;
  let fixture: ComponentFixture<WorkerHolidayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerHolidayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
