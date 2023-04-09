import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStagesEditComponent } from './project-stages-edit.component';

describe('ProjectStagesEditComponent', () => {
  let component: ProjectStagesEditComponent;
  let fixture: ComponentFixture<ProjectStagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectStagesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectStagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
