import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stages-operating',
  templateUrl: './stages-operating.component.html',
  styleUrls: ['./stages-operating.component.css']
})
export class StagesOperatingComponent {
  baseUri: string = 'http://localhost:2000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');  
  StageOne:any
  StageTwo:any
  StageThree:any
  StageFour:any
  constructor(private apiService: ApiService,private actRoute: ActivatedRoute,private http:HttpClient) { 
 }
  
ngOnInit(): void {
  let id = this.actRoute.snapshot.paramMap.get('id2');
  this.getStageOne(id);
  this.getStageTwo(id);
  this.getStageThree(id);
  this.getStageFour(id);
  
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