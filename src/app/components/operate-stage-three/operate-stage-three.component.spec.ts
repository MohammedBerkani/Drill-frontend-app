import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateStageThreeComponent } from './operate-stage-three.component';

describe('OperateStageThreeComponent', () => {
  let component: OperateStageThreeComponent;
  let fixture: ComponentFixture<OperateStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateStageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperateStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
