import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-operator-dashboard',
  templateUrl: './drill-operator-dashboard.component.html',
  styleUrls: ['./drill-operator-dashboard.component.css']
})
export class DrillOperatorDashboardComponent implements OnInit{
Supervisor:any
  Project:any
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,) { 
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.readProject(id);
  this.readSupervisor(id);
 

}
readProject(id){
  this.apiService.recieveProjectForOp(id).subscribe((data) => {
    console.log(data)
   this.Project = data;
  })    
  
}
readSupervisor(id){
  this.apiService.getSupervisor(id).subscribe((data) => {
    console.log(data)
   this.Supervisor = data;
  })    
  
}




}