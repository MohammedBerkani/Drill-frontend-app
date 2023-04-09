import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesOperatingComponent } from './stages-operating.component';

describe('StagesOperatingComponent', () => {
  let component: StagesOperatingComponent;
  let fixture: ComponentFixture<StagesOperatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesOperatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagesOperatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
