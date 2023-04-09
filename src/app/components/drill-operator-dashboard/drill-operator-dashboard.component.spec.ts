import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillOperatorDashboardComponent } from './drill-operator-dashboard.component';

describe('DrillOperatorDashboardComponent', () => {
  let component: DrillOperatorDashboardComponent;
  let fixture: ComponentFixture<DrillOperatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillOperatorDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillOperatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
