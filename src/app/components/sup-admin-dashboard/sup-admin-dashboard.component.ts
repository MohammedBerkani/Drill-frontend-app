import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { __importDefault } from 'tslib';
import {  HostListener } from '@angular/core';

@Component({
  selector: 'app-sup-admin-dashboard',
  templateUrl: './sup-admin-dashboard.component.html',
  styleUrls: ['./sup-admin-dashboard.component.css'],
})
export class SupAdminDashboardComponent implements OnInit {
  admins: any;
  SupAdmin:any;
  public getScreenWidth: any;

  baseUri: string = 'http://localhost:2000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private apiService: ApiService,
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.ShowSupervisingMonitor();
this.readSupAdmin()
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
   
  }
  readSupAdmin(){
    let id = this.actRoute.snapshot.paramMap.get('id');

    this.apiService.readSupAdmin(id).subscribe((data) => {
      console.log(data);
      this.SupAdmin = data;
    });
  
  }
  ShowSupervisingMonitor() {
    this.apiService.getAdmins().subscribe((data) => {
      console.log(data);
      this.admins = data;
    });
  }
  Assign(admin: any) {
    let id_S = admin._id;

    let url = `${this.baseUri}/adminSup/Dashboard/${id_S}/authorization`;
    this.http
      .patch(url, { adminstration: true }, { headers: this.headers })
      .subscribe();
    return window.location.reload();
  }
  
   Delete(admin: any) {
    let id_S = admin._id;
  if (window.confirm('Are sure you  ?')) {
    this.apiService.deleteAdmin(id_S).subscribe(() => {});
    window.location.reload();

  }

  }

  Logout() {
    if (window.confirm('Are sure you want to logout ?')) {
      localStorage.removeItem('id_token_superAd');

      this.router.navigate(['supAdminLogin']);
    }
  }

  Dismiss(admin: any) {
    let id_S = admin._id;
    console.log(id_S);

    let url = `${this.baseUri}/adminSup/Dashboard/${id_S}/authorization`;
    this.http
      .patch(url, { adminstration: false }, { headers: this.headers })
      .subscribe();

    return window.location.reload();
  }

}
