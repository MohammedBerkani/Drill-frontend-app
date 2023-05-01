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
Stage:any
  submitted = false
  EditLastStageForm:FormGroup
  opSelect="pending"
  opSelect2="pending"

constructor(public fb: FormBuilder,
  private router: Router,
  private ngZone: NgZone,
  private apiService: ApiService,
  private actRoute: ActivatedRoute){
    this.mainForm();
this.readStage() 
}
ngOnInit(): void {

}

readStage(){
    let id = this.actRoute.snapshot.paramMap.get('id2');
  this.apiService.getLastStage(id).subscribe((data) => {
    console.log(data)
   this.Stage = data;
  })
}
mainForm() {
 
  this.EditLastStageForm = this.fb.group({
    initialDate:['', ],
    finalDate:['', ],
 
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
    let id2 = this.actRoute.snapshot.paramMap.get('id');

    this.apiService.UpdateLastStageByOp(this.EditLastStageForm.value,id).subscribe({

      
      error: (e) => {
        
        console.log(e);
      },
    });
    return this.router.navigate([`/DrillOperator/${id2}/Dashboard/project/${id}/ProjectOperating`])
    .then(() => {
      window.location.reload();
    });
  }
}
}
