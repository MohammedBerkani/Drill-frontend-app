import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateStageTwiComponent } from './operate-stage-twi.component';

describe('OperateStageTwiComponent', () => {
  let component: OperateStageTwiComponent;
  let fixture: ComponentFixture<OperateStageTwiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateStageTwiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateStageTwiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
