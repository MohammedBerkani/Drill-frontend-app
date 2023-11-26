import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  submitted = false;
  ProfileForm: FormGroup;
PasswordForm:FormGroup
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private actRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.updateProfile();
    this.getAdmin();
    this.updatePassword();
  
    this.ProfileForm = this.fb.group({
      name: ['', ],
    });
     
 
  }
  getAdmin() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id)
    this.apiService.getAdmin(id).subscribe((data) => {

      console.log(data['name'])
      this.ProfileForm.setValue({
          name: data['name'],
   
        
      });
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
  goDashboard(){
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.router.navigate([
      `admin/${id}/Dashboard`,
    ])
  }
  onSubmit() {
    this.submitted = true;
    if (!this.ProfileForm.valid) {
      return false;
    } else {
      let id = this.actRoute.snapshot.paramMap.get('id');

         this.apiService
      .UpdateAdminProfile(this.ProfileForm.value, id)
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
      .UpdateAdminPassword(this.PasswordForm.value, id)
      .subscribe({
        error: (e) => {
          console.log(e);
        },
      });
      return window.location.reload();
   
    }
  }
}
