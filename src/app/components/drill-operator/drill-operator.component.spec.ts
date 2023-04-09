import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillOperatorComponent } from './drill-operator.component';

describe('DrillOperatorComponent', () => {
  let component: DrillOperatorComponent;
  let fixture: ComponentFixture<DrillOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrillOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrillOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
