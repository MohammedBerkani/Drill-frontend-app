import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  submitted = false
    ProjectForm:FormGroup
  
   
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
    ,private actRoute: ActivatedRoute){
      this.mainForm();
    
  }
  ngOnInit(): void {
    
  }
  mainForm() {
   
    this.ProjectForm = this.fb.group({
      number: ['', ],
     
    determinedTime: ['', ],
    basic_info:this.fb.group({
      contractor:['', ],
      cellarDepth:['', ],
      wellProfile:['', ],

      targetReservoir:['', ],    
      targetFormation:['', ],
      targetToleranceShape:['', ],  
      TdFormationDepth:['', ],
      SurfaceLontitude:['', ],
      SurfaceLatitude:['', ],
    }),

    });
  }
  get myForm() {
    return this.ProjectForm.controls;
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (!this.ProjectForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');
     
      return this.apiService.addProject(this.ProjectForm.value,id).subscribe({
        complete: () => {
          console.log('Project successfully created!'),
            this.ngZone.run(() => this.router.navigate(["admin",id,"Dashboard"]))
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
  }
