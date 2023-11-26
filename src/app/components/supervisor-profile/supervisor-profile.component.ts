import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.css']
})
export class SupervisorProfileComponent implements OnInit {
  submitted = false;
  ProfileForm: FormGroup;
PasswordForm:FormGroup;
supervisor:any

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private actRoute: ActivatedRoute,
    
  ) {}
  ngOnInit(): void {
    this.updateProfile();
    this.getSupervisor();
    this.updatePassword();
  
    this.ProfileForm = this.fb.group({
      name: ['', ],
    });
     
 
  }
goDashboard(){
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.router.navigate([
    `DrillSupervisor/${id}/Dashboard`,
  ])
}
  getSupervisor() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.apiService.findSupervisor(id).subscribe((data) => {

      console.log(data['name'])
      this.ProfileForm.setValue({
          name: data['name'],
   
        
      });
      this.supervisor=data
    });
  }
  updateProfile() {
    this.ProfileForm = this.fb.group({
      name: ['', ],
     
    });
  }
  updatePassword() {
    this.PasswordForm = this.fb.group({
      password: ['', ],
     
    });
  }

  get myForm() {
    return this.ProfileForm.controls;
  }
  get PwForm() {
    return this.PasswordForm.controls;
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
    if (!this.ProfileForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');

       this.apiService
      .UpdateSupervisorProfile(this.ProfileForm.value, id)
      .subscribe({
        error: (e) => {
          console.log(e);
        },
      });
      return window.location.reload();
   
    }
  }
  SubmitNewPassword() {
    this.submitted = true;
    if (!this.PasswordForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');

         this.apiService
      .UpdateSupervisorPassword(this.PasswordForm.value, id)
      .subscribe({
        error: (e) => {
          console.log(e);
        },
      });
      return window.location.reload();
   
    }
  }
}
