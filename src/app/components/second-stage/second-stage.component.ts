import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SecondStage } from 'src/app/models/second-stage.model';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-second-stage',
  templateUrl: './second-stage.component.html',
  styleUrls: ['./second-stage.component.css']
})
export class SecondStageComponent implements OnInit {
  project:any
  submitted = false
  SecondStageForm:FormGroup
  opSelect="pending"
 
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService
  ,private actRoute: ActivatedRoute,
  private location: Location){
    this.mainForm();
    this.readProject()
  
}
ngOnInit(): void {
  
}
readProject(){
  let id = this.actRoute.snapshot.paramMap.get('id');

this.apiService.recieveProject(id).subscribe((data) => {
 this.project= data;
})
}
mainForm() {
 
  this.SecondStageForm = this.fb.group({
  casing:this.fb.group({
    weight:['', ],
    grade:['', ],
    state:['', ],
   }),
   cementing:this.fb.group({
    state:['', ],
   }),
   section:this.fb.group({
    surfaceHoleSize:['', ],
    finalDepth:['', ],
   })
});
}
get myForm() {
  return this.SecondStageForm.controls;
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
  if (!this.SecondStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
    this.apiService.addSecondStage(this.SecondStageForm.value,id).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
    return window.location.reload();
  }
}
}
