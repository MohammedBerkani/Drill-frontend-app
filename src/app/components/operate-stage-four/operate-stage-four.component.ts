import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-operate-stage-four',
  templateUrl: './operate-stage-four.component.html',
  styleUrls: ['./operate-stage-four.component.css']
})
export class OperateStageFourComponent implements OnInit {

  submitted = false
  EditLastStageForm:FormGroup
  opSelect="pending"
  opSelect2="pending"
 
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
 
  this.EditLastStageForm = this.fb.group({
  casing:this.fb.group({
    state:['', ],
   }),
   cementing:this.fb.group({
    state:['', ],
   }),
   section:this.fb.group({
    depthInProgress:['', ]
   })
});
}
get myForm() {
  return this.EditLastStageForm.controls;
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
  if (!this.EditLastStageForm.valid) {
    return false;
  } else {
    let id = this.actRoute.snapshot.paramMap.get('id2');
   
    return this.apiService.UpdateLastStageByOp(this.EditLastStageForm.value,id).subscribe({
      error: (e) => {
        console.log(e);
      },
    });
  }
}
}
