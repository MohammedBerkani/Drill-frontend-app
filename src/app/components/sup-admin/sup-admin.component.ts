import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sup-admin',
  templateUrl: './sup-admin.component.html',
  styleUrls: ['./sup-admin.component.css']
})
export class SupAdminComponent  implements OnInit{
  submitted = false
  supAdminForm:FormGroup
  supAdmin:any
   
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService){
      this.mainForm();
    
  }
  ngOnInit(): void {
  }
  mainForm() {
    this.supAdminForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
      });
  }
  get myForm() {
    return this.supAdminForm.controls;
  }
  onSubmit() {
    this.submitted = true;
  if (!this.supAdminForm.valid) {
      return false;
    } else {
      return this.apiService.addSupAdmin(this.supAdminForm.value).subscribe((data)=>{
       
        this.supAdmin=data
        this.ngZone.run(() => this.router.navigate(["adminSup/dashboard"]));
      });
    }
  }

}
