import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project-stages',
  templateUrl: './project-stages.component.html',
  styleUrls: ['./project-stages.component.css']
})
export class ProjectStagesComponent implements OnInit{
  baseUri: string = 'http://localhost:2000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');  
project:any
  DrillOperators :any
  StageOne:any
  StageTwo:any
  StageThree:any
  StageFour:any
  Operator:any
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,private http:HttpClient) { 
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id2');
  this.getStageOne(id);
  this.getStageTwo(id);
  this.getStageThree(id);
  this.getStageFour(id);
this.ShowSupervisingMonitor()
this.getOneOperator()
this.getOneProject()
}
getOneProject(){
  let id= this.actRoute.snapshot.paramMap.get('id');
  this.apiService.recieveProject(id).subscribe((data) => {
    console.log(data)
   this.project=data   

  });
 }
 getOneOperator(){
   let id= this.actRoute.snapshot.paramMap.get('id2');
 
   this.apiService.getOperator(id).subscribe((data) => {
 
    this.Operator=data   
   });
  }
 
ShowSupervisingMonitor(){
  this.apiService.getDrillOperators().subscribe((data) => {
    console.log(data)
   this.DrillOperators = data;
  })    
}
Assign(operator:any){
  console.log("qsd")
      let id_S=operator._id
      let id_P = this.actRoute.snapshot.paramMap.get('id2');
      let id_sup = this.actRoute.snapshot.paramMap.get('id');
      
      console.log(id_P,id_S)
   
          
          console.log(operator,)
        let url = `${this.baseUri}/drillSupervisor/${id_sup}/Dashboard/SupervisingMonitor/${id_P}/${id_S}`;
        this.http.patch(url, {operating:true}, { headers: this.headers }).subscribe();
        
               this.http.patch(url, {operating:true}, { headers: this.headers }).subscribe();
              return  window.location.reload();  
        
  
         
    
    }
   
  Dismiss(operator:any){
 
    let id_S=operator._id
    console.log(id_S)
    let id_P = this.actRoute.snapshot.paramMap.get('id2');
    let id_sup = this.actRoute.snapshot.paramMap.get('id');
       
      console.log(operator)
      let url = `${this.baseUri}/drillSupervisor/${id_sup}/Dashboard/SupervisingMonitor/${id_P}/${id_S}`;
     
        this.http.patch(url, {operating:false}, { headers: this.headers }).subscribe()
      return  window.location.reload();
      ; 
     
            
        
  
  
  
  }

getStageOne(id){
  this.apiService.getFirstStage(id).subscribe((data) => {
    console.log(data)
   this.StageOne = data;
  })
      
}
getStageTwo(id){
  this.apiService.getSecondStage(id).subscribe((data) => {
    console.log(data)
   this.StageTwo = data;
  })
      
}
getStageThree(id){
  this.apiService.getThirdStage(id).subscribe((data) => {
    console.log(data)
   this.StageThree = data;
  })
      
}
getStageFour(id){
  this.apiService.getLastStage(id).subscribe((data) => {
    console.log(data)
   this.StageFour = data;
  })
      
}




}