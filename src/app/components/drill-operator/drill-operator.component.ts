import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-operator',
  templateUrl: './drill-operator.component.html',
  styleUrls: ['./drill-operator.component.css']
})
export class DrillOperatorComponent implements OnInit {
  submitted = false
  DrillOpForm:FormGroup
drillOperator:any  
 
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService){
    this.mainForm();
  
}
ngOnInit(): void {
}
mainForm() {
  this.DrillOpForm = this.fb.group({
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
  return this.DrillOpForm.controls;
}
onSubmit() {
  this.submitted = true;
  if (!this.DrillOpForm.valid) {
    return false;
  } else {
    return this.apiService.addDrillOperator(this.DrillOpForm.value).subscribe((data)=>{
     
      this.drillOperator=data
      console.log(this.drillOperator)
      this.ngZone.run(() => this.router.navigate(["DrillOperator",this.drillOperator._id,"Dashboard"]));
    });
  }
}
}
