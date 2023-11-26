import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  private unsubscriber : Subject<void> = new Subject<void>();

  submitted = false
    adminForm:FormGroup
  admin:any
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
    this.adminForm = this.fb.group({
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
    return this.adminForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.adminForm.valid) {
      return false;
    } else {
      return this.apiService.addAdmin(this.adminForm.value).subscribe((data)=>{
       console.log(data)
        this.admin=data['admin_cre']
        localStorage.setItem('id_token_admin', data['token']);
        this.ngZone.run(() => this.router.navigate(["admin",this.admin._id,"Dashboard"]));
      });
    }
  }
  }
