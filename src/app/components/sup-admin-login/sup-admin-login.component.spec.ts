import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminLoginComponent } from './sup-admin-login.component';

describe('SupAdminLoginComponent', () => {
  let component: SupAdminLoginComponent;
  let fixture: ComponentFixture<SupAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAdminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
