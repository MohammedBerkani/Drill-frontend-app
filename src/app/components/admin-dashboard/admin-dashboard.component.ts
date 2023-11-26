import { Component, HostListener, OnInit } from '@angular/core';
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
  public getScreenWidth: any;

 admin:any
  Projects:any ;
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,  private router: Router,) { 
  


    
  }
  
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;

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
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
   
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  Logout(){
    if(window.confirm('Are sure you want to logout ?')){
      localStorage.removeItem('id_token_admin');
   
      this.router.navigate(['adminlog']);
    
     }
  
    
  }
  deleteProject(id){
    console.log(id)
    if(window.confirm('Are sure you  ?')){
      this.apiService.deleteProject(id).subscribe(() => {
      }
      )
     }
  
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
