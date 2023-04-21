import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drill-supervisor-dashboard',
  templateUrl: './drill-supervisor-dashboard.component.html',
  styleUrls: ['./drill-supervisor-dashboard.component.css']
})
export class DrillSupervisorDashboardComponent implements OnInit {
  
Project:any

  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,) { 
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id');
  this.readProject(id);


}
readProject(id){
  this.apiService.recieveProject(id).subscribe((data) => {
    console.log(data)
   this.Project = data;

  })    
}



}