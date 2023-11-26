import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminProfileComponent } from './sup-admin-profile.component';

describe('SupAdminProfileComponent', () => {
  let component: SupAdminProfileComponent;
  let fixture: ComponentFixture<SupAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAdminProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
