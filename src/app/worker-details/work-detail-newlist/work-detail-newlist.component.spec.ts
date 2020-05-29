import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailNewlistComponent } from './work-detail-newlist.component';

describe('WorkDetailNewlistComponent', () => {
  let component: WorkDetailNewlistComponent;
  let fixture: ComponentFixture<WorkDetailNewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailNewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailNewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
