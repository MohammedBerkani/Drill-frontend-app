import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 
  Projects:any = [];
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,) { 
  


    
  }
  
  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.readProjects(id);

  }
  readProjects(id){
    this.apiService.getProjects(id).subscribe((data) => {
      console.log(data)
     this.Projects = data;
    })    
  }
}
