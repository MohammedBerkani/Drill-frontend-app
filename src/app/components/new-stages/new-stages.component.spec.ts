import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStagesComponent } from './new-stages.component';

describe('NewStagesComponent', () => {
  let component: NewStagesComponent;
  let fixture: ComponentFixture<NewStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
