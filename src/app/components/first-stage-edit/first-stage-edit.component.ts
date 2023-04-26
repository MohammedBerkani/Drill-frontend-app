import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-first-stage-edit',
  templateUrl: './first-stage-edit.component.html',
  styleUrls: ['./first-stage-edit.component.css']
})
export class FirstStageEditComponent  implements OnInit{
  submitted = false
  EditFirstStageForm:FormGroup
  opSelect="pending"
 
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService
  ,private actRoute: ActivatedRoute){
    
  
}
ngOnInit(): void {
  this.updateStage()
  this.getStage()

  this.EditFirstStageForm = this.fb.group({
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
  return this.EditFirstStageForm.controls;
}
getStage(){
let id= this.actRoute.snapshot.paramMap.get('id2');
this.apiService.getFirstStage(id).subscribe((data) => {

  this.EditFirstStageForm.setValue({
    casing:{
      weight:data['casing']['weight'],
      grade:data['casing']['grade'],
      state:data['casing']['state']
     
     },
     cementing:{
      state:data['cementing']['state'],
     },
     section:{
      ConductorHoleSize:data['section']['ConductorHoleSize'],
      finalDepth:data['section']['finalDepth'],
       }
  });


 




 });
 

}
updateStage(){
  
  this.EditFirstStageForm = this.fb.group({
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
  if (!this.EditFirstStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
   
    this.apiService.UpdateFirstStage(this.EditFirstStageForm.value,id).subscribe({
     
      error: (e) => {
        console.log(e);

      },
    });
  }
  return   window.location.reload();

}
}
