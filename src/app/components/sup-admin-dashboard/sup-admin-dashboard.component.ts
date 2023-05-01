import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-sup-admin-dashboard',
  templateUrl: './sup-admin-dashboard.component.html',
  styleUrls: ['./sup-admin-dashboard.component.css']
})
export class SupAdminDashboardComponent implements OnInit {
admins:any
  baseUri: string = 'http://localhost:2000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');  
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,private http:HttpClient) { 
 }
  
ngOnInit(): void {
this.ShowSupervisingMonitor()
}

  ShowSupervisingMonitor(){
    this.apiService.getAdmins().subscribe((data) => {
      console.log(data)
     this.admins = data;
    })    
  }
  Assign(admin:any){
    let id_S=admin._id
      
        
      let url = `${this.baseUri}/adminSup/Dashboard/${id_S}/authorization`;
      return  this.http.patch(url, {adminstration:true}, { headers: this.headers }).subscribe();
     
       
       
  
  }
  Dismiss(admin:any){
 
    let id_S=admin._id
    console.log(id_S)

       

      let url = `${this.baseUri}/adminSup/Dashboard/${id_S}/authorization`;
      this.http.patch(url, {adminstration:false}, { headers: this.headers }).subscribe()
  
      return  window.location.reload();
       
        
  
  
  
  }


}
