import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-first-stage',
  templateUrl: './first-stage.component.html',
  styleUrls: ['./first-stage.component.css']
})
export class FirstStageComponent implements OnInit {
  submitted = false
  FirstStageForm:FormGroup
  opSelect="pending"
  opSelect2="pending"
  project:any
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService
  ,private actRoute: ActivatedRoute,
  private location: Location){
    this.mainForm();
  this.readproject()
}
ngOnInit(): void {
  
}
readproject(){
  let id = this.actRoute.snapshot.paramMap.get('id');
  console.log(id)
this.apiService.recieveProject(id).subscribe((data) => {
  console.log(data)
 this.project= data;
})
}
mainForm() {
 
  this.FirstStageForm = this.fb.group({
  casing:this.fb.group({
    weight:['', ],
    grade:['', ],
    state:['', ],
   }),
   cementing:this.fb.group({
    state:['', ],
   }),
   section:this.fb.group({
    ConductorHoleSize:['', ],
    finalDepth:['', ],
   })
});
}
get myForm() {
  return this.FirstStageForm.controls;
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
  if (!this.FirstStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
    this.apiService.addFirstStage(this.FirstStageForm.value,id).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
    return  window.location.reload();
    
  }
    
    
}
}
