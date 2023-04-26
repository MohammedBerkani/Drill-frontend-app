import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-third-stage-edit',
  templateUrl: './third-stage-edit.component.html',
  styleUrls: ['./third-stage-edit.component.css']
})
export class ThirdStageEditComponent {
  submitted = false
  EditThirdStageForm:FormGroup
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
  
  this.EditThirdStageForm = this.fb.group({
    casing:this.fb.group({
      weight:['', ],
      grade:['', ],
      state:['', ],
     }),
     cementing:this.fb.group({
      state:['', ],
     }),
     section:this.fb.group({
      intermediateHoleSize:['', ],
      finalDepth:['', ],
     })
  });

}
 
get myForm() {
  return this.EditThirdStageForm.controls;
}

getStage(){
  let id= this.actRoute.snapshot.paramMap.get('id2');
  this.apiService.getThirdStage(id).subscribe((data) => {
  console.log(data)
    this.EditThirdStageForm.setValue({
      casing:{
        weight:data['casing']['weight'],
        grade:data['casing']['grade'],
        state:data['casing']['state']
       
       },
       cementing:{
        state:data['cementing']['state'],
       },
       section:{
        intermediateHoleSize:data['section']['intermediateHoleSize'],
        finalDepth:data['section']['finalDepth'],
         }
    });
  
  
   
  
  
  
  
   });
   
  
  }
  updateStage(){
    
    this.EditThirdStageForm= this.fb.group({
      casing:this.fb.group({
        weight:['', ],
        grade:['', ],
        state:['', ],
       }),
       cementing:this.fb.group({
        state:['', ],
       }),
       section:this.fb.group({
        intermediateHoleSize:['', ],
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
  if (!this.EditThirdStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
   
     this.apiService.UpdateThirdStage(this.EditThirdStageForm.value,id).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
    return   window.location.reload();

  }

}
}
