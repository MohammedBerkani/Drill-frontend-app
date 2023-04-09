import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateStageOneComponent } from './operate-stage-one.component';

describe('OperateStageOneComponent', () => {
  let component: OperateStageOneComponent;
  let fixture: ComponentFixture<OperateStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateStageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
