import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillSupervisorDashboardComponent } from './drill-supervisor-dashboard.component';

describe('DrillSupervisorDashboardComponent', () => {
  let component: DrillSupervisorDashboardComponent;
  let fixture: ComponentFixture<DrillSupervisorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillSupervisorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillSupervisorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
