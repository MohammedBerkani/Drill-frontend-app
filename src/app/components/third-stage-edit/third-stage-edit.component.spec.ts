import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStageEditComponent } from './third-stage-edit.component';

describe('ThirdStageEditComponent', () => {
  let component: ThirdStageEditComponent;
  let fixture: ComponentFixture<ThirdStageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdStageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
