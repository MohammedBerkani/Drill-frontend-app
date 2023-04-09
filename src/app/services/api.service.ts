import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../models/admin.model';
import { Project } from '../models/project.model';
import { DrillSupervisor } from '../models/drill-supervisor.model';
import { ThirdStage } from '../models/third-stage.model';
import { FirstStage } from '../models/first-stage.model';
import { SecondStage } from '../models/second-stage.model';
import { LastStage } from '../models/last-stage.model';
import { DrillOperator } from '../models/drill-operator.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private refetchSubject=new BehaviorSubject(null)
  baseUri: string = 'http://localhost:2000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  // Create
  
  constructor(private http: HttpClient) {
    }
    get refetch(){
      return this.refetchSubject.asObservable()
    }
   
addAdmin(data:any): Observable<Admin> {
    let url = `${this.baseUri}/admin/register`;

    return this.http.post(url, data).pipe();
 
}
getProject(id){
  console.log(id)
  let url = `${this.baseUri}/admin/:id/Dashboard/Project/${id}`;

    return this.http.get(url).pipe();

}
getDriller(id){
  console.log(id)
  let url = `${this.baseUri}/admin/:id/Dashboard/Driller/${id}`;

    return this.http.get(url).pipe();

}
getOperator(id){
  console.log(id)
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Operator/${id}`;

    return this.http.get(url).pipe();

}
getProjects(id){
  console.log(id)
  let url = `${this.baseUri}/admin/${id}/Dashboard/`;

    return this.http.get(url).pipe();
}

getFirstStage(id){
   let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageOne`;

    return this.http.get(url).pipe();
}
getSecondStage(id){
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageTwo`;

   return this.http.get(url).pipe();
}
getThirdStage(id){
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageThree`;

   return this.http.get(url).pipe();
}
getLastStage(id){
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageFour`;

   return this.http.get(url).pipe();
}

recieveProject(id){
  console.log(id)
  let url = `${this.baseUri}/drillSupervisor/${id}/Dashboard/`;

    return this.http.get(url).pipe();
}
recieveProjectForOp(id){
  console.log(id)
  let url = `${this.baseUri}/drillOperator/${id}/Dashboard/`;

    return this.http.get(url).pipe();
}


getDrillSupervisor(){
  let url = `${this.baseUri}/admin/Dashboard/SupervisingMonitor`;

    return this.http.get(url).pipe();
}
getDrillOperators(){
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/Operators`;

  return this.http.get(url).pipe();
}

addDrillSupervisor(data:any): Observable<DrillSupervisor> {
  let url = `${this.baseUri}/drillSupervisor/register`;
  return this.http.post(url, data).pipe();

}
addDrillOperator(data:any): Observable<DrillOperator> {
  let url = `${this.baseUri}/drillOperator/register`;
  return this.http.post(url, data).pipe();

}

addFirstStage(data:any,id):Observable<FirstStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/ProjectStages/${id}/firstStage`;
  console.log(data)
  return this.http.post<FirstStage>(url, data).pipe();

}
addSecondStage(data:any,id):Observable<SecondStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/ProjectStages/${id}/secondStage`;
  console.log(data)
  return this.http.post<SecondStage>(url, data).pipe();

}
addThirdStage(data:any,id):Observable<ThirdStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/ProjectStages/${id}/thirdStage`;
  console.log(data)
  return this.http.post<ThirdStage>(url, data).pipe();

}
addLastStage(data:any,id):Observable<LastStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/ProjectStages/${id}/lastStage`;
  console.log(data)
  return this.http.post<LastStage>(url, data).pipe();

}

addProject(data:any,id): Observable<Project> {
  let url = `${this.baseUri}/admin/${id}/NewProject`;
  console.log(data)
  return this.http.post<Project>(url, data).pipe();

}

UpdateProject(data:any,id1,id2): Observable<Project> {
  let url = `${this.baseUri}/admin/${id1}/Dashboard/Project/${id2}`;
  console.log(data)
  return this.http.patch<Project>(url, data).pipe();

}
UpdateFirstStage(data:any,id): Observable<FirstStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageOne`;
  console.log(data)
  return this.http.patch<FirstStage>(url, data).pipe();

}

UpdateFirstStageByOp(data:any,id): Observable<FirstStage> {
  let url = `${this.baseUri}/drillOperator/:id/Dashboard/Project/${id}/StageOne`;
  console.log(data)
  return this.http.patch<FirstStage>(url, data).pipe();

}
UpdateSecondStage(data:any,id): Observable<SecondStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageTwo`;
  console.log(data)
  return this.http.patch<SecondStage>(url, data).pipe();

}

UpdateSecondStageByOp(data:any,id): Observable<SecondStage> {
  let url = `${this.baseUri}/drillOperator/:id/Dashboard/Project/${id}/StageTwo`;
  console.log(data)
  return this.http.patch<SecondStage>(url, data).pipe();

}
UpdateThirdStage(data:any,id): Observable<ThirdStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageThree`;
  console.log(data)
  return this.http.patch<ThirdStage>(url, data).pipe();

}
UpdateThirdStageByOp(data:any,id): Observable<ThirdStage> {
  let url = `${this.baseUri}/drillOperator/:id/Dashboard/Project/${id}/StageThree`;
  console.log(data)
  return this.http.patch<ThirdStage>(url, data).pipe();

}
UpdateLastStage(data:any,id): Observable<LastStage> {
  let url = `${this.baseUri}/drillSupervisor/:id/Dashboard/Project/${id}/StageFour`;
  console.log(data)
  return this.http.patch<LastStage>(url, data).pipe();

}
UpdateLastStageByOp(data:any,id): Observable<LastStage> {
  let url = `${this.baseUri}/drillOperator/:id/Dashboard/Project/${id}/StageFour`;
  console.log(data)
  return this.http.patch<LastStage>(url, data).pipe();

}
}