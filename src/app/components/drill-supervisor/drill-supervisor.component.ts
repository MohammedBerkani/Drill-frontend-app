import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-supervisor',
  templateUrl: './drill-supervisor.component.html',
  styleUrls: ['./drill-supervisor.component.css']
})
export class DrillSupervisorComponent implements OnInit {
  submitted = false
    DrillSpvForm:FormGroup
drillSupervisor:any  
   
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService){
      this.mainForm();
    
  }
  ngOnInit(): void {
  }
  mainForm() {
    this.DrillSpvForm = this.fb.group({
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
    return this.DrillSpvForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.DrillSpvForm.valid) {
      return false;
    } else {
      return this.apiService.addDrillSupervisor(this.DrillSpvForm.value).subscribe((data)=>{
       
        this.drillSupervisor=data
        console.log(this.drillSupervisor)
        this.ngZone.run(() => this.router.navigate(["DrillSupervisor",this.drillSupervisor._id,"Dashboard"]));
      });
    }
  }
  }
