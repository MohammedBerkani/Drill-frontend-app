import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-second-stage-edit',
  templateUrl: './second-stage-edit.component.html',
  styleUrls: ['./second-stage-edit.component.css']
})
export class SecondStageEditComponent {
  submitted = false
  EditSecondStageForm:FormGroup
  opSelect="pending"
 
constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService
  ,private actRoute: ActivatedRoute){
    this.mainForm();
  
}
ngOnInit(): void {
  
}
mainForm() {
 
  this.EditSecondStageForm = this.fb.group({
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
  return this.EditSecondStageForm.controls;
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
  if (!this.EditSecondStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
   
    return this.apiService.UpdateSecondStage(this.EditSecondStageForm.value,id).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
  }
}
}
