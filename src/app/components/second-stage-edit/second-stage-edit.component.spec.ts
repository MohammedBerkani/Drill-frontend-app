import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStageEditComponent } from './second-stage-edit.component';

describe('SecondStageEditComponent', () => {
  let component: SecondStageEditComponent;
  let fixture: ComponentFixture<SecondStageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondStageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
