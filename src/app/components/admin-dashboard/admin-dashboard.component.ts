import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { ApiService } from 'src/app/services/api.service';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  private unsubscriber : Subject<void> = new Subject<void>();
  showError: boolean = false;
 
 admin:any
  Projects:any ;
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,  private router: Router,) { 
  


    
  }
  
  ngOnInit() {
    history.pushState(null, '');

    fromEvent(window, 'popstate')
    .pipe(takeUntil(this.unsubscriber))
    .subscribe((_) => {
      history.pushState(null, '');
      this.showError = true;
    });
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.readProjects(id);
    this.readAdmin(id)

  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  Logout(){
    localStorage.removeItem('id_token');
   
    this.router.navigate(['adminlog']);
  }
  readAdmin(id){
    this.apiService.getAdmin(id).subscribe((data) => {
      console.log(data)
     this.admin = data;
    })   
  }
  readProjects(id){
    this.apiService.getProjects(id).subscribe((data) => {
      console.log(data)
     this.Projects = data;
    })    
  }
}
