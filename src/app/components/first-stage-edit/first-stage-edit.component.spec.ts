import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStageEditComponent } from './first-stage-edit.component';

describe('FirstStageEditComponent', () => {
  let component: FirstStageEditComponent;
  let fixture: ComponentFixture<FirstStageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
