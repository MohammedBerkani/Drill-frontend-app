import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-supervisor-login',
  templateUrl: './supervisor-login.component.html',
  styleUrls: ['./supervisor-login.component.css']
})
export class SupervisorLoginComponent implements OnInit {
  private unsubscriber : Subject<void> = new Subject<void>();

  submitted = false
    supervisorForm:FormGroup
  supervisor:any
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
    this.supervisorForm = this.fb.group({
      
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
    return this.supervisorForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.supervisorForm.valid) {
      return false;
    } else {
      return this.apiService.LoginSupervisor(this.supervisorForm.value).subscribe((data)=>{
       console.log(data)
        this.supervisor=data['supervisor_log']
        localStorage.setItem('id_token', data['token']);
        this.ngZone.run(() => this.router.navigate(["DrillSupervisor",this.supervisor._id,"Dashboard"]));
      });
    }
  }

}
