import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastStageComponent } from './last-stage.component';

describe('LastStageComponent', () => {
  let component: LastStageComponent;
  let fixture: ComponentFixture<LastStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
