import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { DrillSupervisor } from 'src/app/models/drill-supervisor.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  submitted = false
  DrillSupervisors:any
    ProjectForm:FormGroup
    baseUri: string = 'http://localhost:2000/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');  
  project:any
  OneDriller:any
   constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private http:HttpClient,
    private apiService: ApiService
    ,private actRoute: ActivatedRoute){
      this.mainForm();
    
  }
  ngOnInit(): void {
 
    this.ShowSupervisingMonitor()
    this.getOneProject()
    this.getOneDriller()

  
  }

getOneProject(){
 let id= this.actRoute.snapshot.paramMap.get('id2');
 this.apiService.getProject(id).subscribe((data) => {
  this.project=data   
  console.log(data)
 });
}
getOneDriller(){
  let id= this.actRoute.snapshot.paramMap.get('id2');

  this.apiService.getDriller(id).subscribe((data) => {

   this.OneDriller=data   
  });
 }
 
 


  Assign(driller:any){
console.log("qsd")
    let id_S=driller._id
    let id_P = this.actRoute.snapshot.paramMap.get('id2');
        console.log(id_P,id_S)
 
        
        console.log(driller,)
      let url = `${this.baseUri}/admin/Dashboard/SupervisingMonitor/${id_P}/${id_S}`;
      this.http.patch(url, {supervising:true}, { headers: this.headers }).subscribe();
      return  window.location.reload();
       
  
  }
  Dismiss(driller:any){
 
    let id_S=driller._id
    console.log(id_S)
    let id_P = this.actRoute.snapshot.paramMap.get('id2');
       
      console.log(driller)
      let url = `${this.baseUri}/admin/Dashboard/SupervisingMonitor/${id_P}/${id_S}`;
      this.http.patch(url, {supervising:false}, { headers: this.headers }).subscribe()
  
      return  window.location.reload();
       
        
  
  
  
  }

  ShowSupervisingMonitor(){
    this.apiService.getDrillSupervisor().subscribe((data) => {
      console.log(data)
     this.DrillSupervisors = data;
    })    
  }
  mainForm() {
   
    this.ProjectForm = this.fb.group({
      number: ['', ],

    determinedTime: ['', ],
    basic_info:this.fb.group({
      contractor:['', ],
      cellarDepth:['', ],
      wellProfile:['', ],

      targetReservoir:['', ],    
      targetFormation:['', ],
      targetToleranceShape:['', ],  
      TdFormationDepth:['', ],


      surfaceCordinate:this.fb.group({
        Type:['', ],}),
       
        
        

     })
  });
  }
  get myForm() {
    return this.ProjectForm.controls;
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
    if (!this.ProjectForm.valid) {
      return false;
    } else {
      let id1 = this.actRoute.snapshot.paramMap.get('id1');
      let id2 = this.actRoute.snapshot.paramMap.get('id2');
     
      return this.apiService.UpdateProject(this.ProjectForm.value,id1,id2).subscribe({
        complete: () => {
          console.log('Project successfully created!'),
            this.ngZone.run(() => this.router.navigate(["admin",id1,"Dashboard"]))
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
  }
