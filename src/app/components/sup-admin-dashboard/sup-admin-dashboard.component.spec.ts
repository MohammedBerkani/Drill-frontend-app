import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdminDashboardComponent } from './sup-admin-dashboard.component';

describe('SupAdminDashboardComponent', () => {
  let component: SupAdminDashboardComponent;
  let fixture: ComponentFixture<SupAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupAdminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
