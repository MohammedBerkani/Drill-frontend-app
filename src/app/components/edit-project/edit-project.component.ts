import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { DrillSupervisor } from 'src/app/models/drill-supervisor.model';
import { Project } from 'src/app/models/project.model';
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
  project:Project
  OneDriller:any
   constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private http:HttpClient,
    private apiService: ApiService
    ,private actRoute: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.ShowSupervisingMonitor()
    this.getOneDriller()

    this.updateProject()
 this.getOneProject()

     this.ProjectForm =  this.fb.group({
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
      SurfaceLontitude:['',] ,
      SurfaceLatitude:['',] ,
      TargetLontitude:['',] ,
      TargetLatitude:['',] ,
  

        
        

     })
  });
   

  
  }
 
getOneDriller(){
  let id= this.actRoute.snapshot.paramMap.get('id2');

  this.apiService.getDriller(id).subscribe((data) => {
console.log(data)
   this.OneDriller=data   
  });
 }
 
 


  Assign(driller:any){
    let id_S=driller._id
    let id_P = this.actRoute.snapshot.paramMap.get('id2');
      
        
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
  
  updateProject() {
   
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
      SurfaceLontitude:['',] ,
      SurfaceLatitude:['',] ,
      TargetLontitude:['',] ,
      TargetLatitude:['',] ,
  

        
        

     })
  });
  }
  get myForm() {
    return this.ProjectForm.controls;
  }
  getOneProject(){
    let id= this.actRoute.snapshot.paramMap.get('id2');
    this.apiService.getProject(id).subscribe((data) => {

      console.log(data['basic_info']['cellarDepth'])
     this.ProjectForm.setValue({
     
   
       number:data['number'],
       determinedTime:data['determinedTime'],   
      basic_info:{
       contractor:data['basic_info']['contractor'],
       cellarDepth:data['basic_info']['cellarDepth' ],
       wellProfile:data['basic_info']['wellProfile' ],
       targetReservoir:data['basic_info']['targetReservoir' ],    

       targetFormation:data['basic_info']['targetFormation' ],
         targetToleranceShape:data['basic_info']['targetToleranceShape' ],  
         TdFormationDepth:data['basic_info']['TdFormationDepth' ],
         SurfaceLontitude:data['basic_info']['SurfaceLontitude' ] ,
         SurfaceLatitude:data['basic_info']['SurfaceLatitude' ] ,
         TargetLontitude:data['basic_info']['TargetLontitude' ] ,
         TargetLatitude:data['basic_info']['TargetLatitude' ] ,
     
   
   
   
   
   }
     });
     this.project=data
 
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
    if (!this.ProjectForm.valid) {
      return false;
    } else {
      let id2 = this.actRoute.snapshot.paramMap.get('id2');
      this.apiService.UpdateProject(this.ProjectForm.value,id2).subscribe({
     
      });

      return  window.location.reload();
       
       }
  }
  }
