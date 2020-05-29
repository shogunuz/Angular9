import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerHolidayComponent } from './worker-holiday.component';

describe('WorkerHolidayComponent', () => {
  let component: WorkerHolidayComponent;
  let fixture: ComponentFixture<WorkerHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
