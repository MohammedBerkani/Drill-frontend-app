import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-supervisor-dashboard',
  templateUrl: './drill-supervisor-dashboard.component.html',
  styleUrls: ['./drill-supervisor-dashboard.component.css']
})
export class DrillSupervisorDashboardComponent implements OnInit {
  
Project:any
Supervisor:any
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,private router: Router) { 
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.readProject(id);
this.readSupervisor(id)

}
readProject(id){
  this.apiService.recievingProject(id).subscribe((data) => {
    console.log(data)
   this.Project = data;

  })    
}
readSupervisor(id){
  this.apiService.findSupervisor(id).subscribe((data) => {
    console.log(data)
   this.Supervisor = data;
  })    
  
}

Logout(){
  if(window.confirm('Are sure you want to logout ?')){
    localStorage.removeItem('id_token_sp');
 
    this.router.navigate(['drillSupervisorLogin']);
  
   }

}



}