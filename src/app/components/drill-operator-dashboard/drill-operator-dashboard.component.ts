import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-operator-dashboard',
  templateUrl: './drill-operator-dashboard.component.html',
  styleUrls: ['./drill-operator-dashboard.component.css']
})
export class DrillOperatorDashboardComponent implements OnInit{
Supervisor:any
Operator:any
  Project:any
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,private router: Router) {
     
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.readProject(id);
  this.readSupervisor(id);
 this.readOperator(id)

}
Logout(){
  if(window.confirm('Are sure you want to logout ?')){
    localStorage.removeItem('id_token_op');
 
    this.router.navigate(['drillOperatorLogin']);
   }
 
}

readProject(id){
  this.apiService.recieveProjectForOp(id).subscribe((data) => {
    console.log(data)
   this.Project = data;
  })    
  
}

readOperator(id){
  this.apiService.findOperator(id).subscribe((data) => {
    console.log(data)
   this.Operator = data;
  })    
  
}

readSupervisor(id){
  this.apiService.getSupervisor(id).subscribe((data) => {
    console.log(data)
   this.Supervisor = data;
  })    
  
}




}