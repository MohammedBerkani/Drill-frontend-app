import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminRegComponent} from "./components/admin-reg/admin-reg.component"
import {DrillSupervisorComponent} from "./components/drill-supervisor/drill-supervisor.component"
import {ProjectComponent} from "./components/project/project.component"
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component"
import {EditProjectComponent} from "./components/edit-project/edit-project.component"
import{ ProjectStagesComponent }from "./components/project-stages/project-stages.component"
import {DrillSupervisorDashboardComponent} from "./components/drill-supervisor-dashboard/drill-supervisor-dashboard.component"
import {DrillOperatorComponent} from "./components/drill-operator/drill-operator.component"
import {DrillOperatorDashboardComponent} from "./components/drill-operator-dashboard/drill-operator-dashboard.component"
import{  NewStagesComponent}from "./components/new-stages/new-stages.component"
import{ ProjectStagesEditComponent }from "./components/project-stages-edit/project-stages-edit.component"
import{ StagesOperatingComponent }from "./components/stages-operating/stages-operating.component"
import { OperatingComponent } from './components/operating/operating.component';

const routes: Routes = [
  { path: 'adminReg', component:AdminRegComponent },
  { path: 'admin/:id/Dashboard/newProject', component:ProjectComponent },
  { path: 'admin/:id1/Dashboard/editProject/:id2', component:EditProjectComponent},
  
  { path: 'admin/:id/Dashboard', component:AdminDashboardComponent },
  { path: 'DrillSupervisor/:id/Dashboard', component:DrillSupervisorDashboardComponent },
  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages', component:ProjectStagesComponent },
  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages/edit', component:ProjectStagesEditComponent },
  
  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages/New', component:NewStagesComponent },
  
  { path: 'DrillSupervisorReg', component:DrillSupervisorComponent },

  {path:'DrillOperatorReg',component:DrillOperatorComponent},

  { path: 'DrillOperator/:id/Dashboard', component:DrillOperatorDashboardComponent },
  { path: 'DrillOperator/:id/Dashboard/project/:id2/ProjectOperating', component:StagesOperatingComponent },
  { path: 'DrillOperator/:id/Dashboard/project/:id2/ProjectOperating/operate', component:OperatingComponent },
  
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
