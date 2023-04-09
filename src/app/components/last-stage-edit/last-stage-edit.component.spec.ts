import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastStageEditComponent } from './last-stage-edit.component';

describe('LastStageEditComponent', () => {
  let component: LastStageEditComponent;
  let fixture: ComponentFixture<LastStageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastStageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
