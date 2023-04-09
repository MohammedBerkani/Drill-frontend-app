import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateStageFourComponent } from './operate-stage-four.component';

describe('OperateStageFourComponent', () => {
  let component: OperateStageFourComponent;
  let fixture: ComponentFixture<OperateStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateStageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
