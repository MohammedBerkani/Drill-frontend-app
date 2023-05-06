import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sup-admin-login',
  templateUrl: './sup-admin-login.component.html',
  styleUrls: ['./sup-admin-login.component.css']
})
export class SupAdminLoginComponent {
  private unsubscriber : Subject<void> = new Subject<void>();

  submitted = false
  supAdminForm:FormGroup
  supAdmin:any
  showError: boolean = false;
 

   
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService){
      this.mainForm();
    
  }
  ngOnInit(): void {
    history.pushState(null, '');

    fromEvent(window, 'popstate')
    .pipe(takeUntil(this.unsubscriber))
    .subscribe((_) => {
      history.pushState(null, '');
      this.showError = true;
    });
    
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  
  mainForm() {
    this.supAdminForm = this.fb.group({
      
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
      return this.apiService.LoginSupAdmin(this.supAdminForm.value).subscribe((data)=>{
       console.log(data)
        this.supAdmin=data['supAdmin_cre']
        localStorage.setItem('id_token', data['token']);
        this.ngZone.run(() => this.router.navigate(["adminSup/dashboard"]));
      });
    }
  }

}
