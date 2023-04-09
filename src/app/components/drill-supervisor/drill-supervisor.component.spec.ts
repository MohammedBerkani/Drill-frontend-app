import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillSupervisorComponent } from './drill-supervisor.component';

describe('DrillSupervisorComponent', () => {
  let component: DrillSupervisorComponent;
  let fixture: ComponentFixture<DrillSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
