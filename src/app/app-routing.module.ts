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
import {SupAdminComponent} from "./components/sup-admin/sup-admin.component"
import {SupAdminDashboardComponent} from "./components/sup-admin-dashboard/sup-admin-dashboard.component"
import {HomeComponent} from "./components/home/home.component"
import {AdminLoginComponent} from "./components/admin-login/admin-login.component"
import {OperatorLoginComponent} from "./components/operator-login/operator-login.component"
import {SupervisorLoginComponent} from "./components/supervisor-login/supervisor-login.component"
import {SupAdminLoginComponent} from "./components/sup-admin-login/sup-admin-login.component"
import {AdminProfileComponent} from "./components/admin-profile/admin-profile.component"
import {SupervisorProfileComponent} from "./components/supervisor-profile/supervisor-profile.component"
import {SupAdminProfileComponent} from "./components/sup-admin-profile/sup-admin-profile.component"
import {OperatorProfileComponent} from "./components/operator-profile/operator-profile.component"

const routes: Routes = [
  { path: 'adminReg', component:AdminRegComponent },
  { path: 'adminlog', component:AdminLoginComponent },
  { path: 'admin/:id/Dashboard/newProject', component:ProjectComponent },
  { path: 'admin/:id1/Dashboard/editProject/:id2', component:EditProjectComponent},
  { path: 'home', component:HomeComponent},
  
  { path: 'admin/:id/Dashboard', component:AdminDashboardComponent },
  { path: 'admin/:id/Dashboard/profile', component:AdminProfileComponent },

  { path: 'adminSupReg', component:SupAdminComponent },
  { path: 'adminSup/:id/dashboard', component:SupAdminDashboardComponent },
  { path: 'adminSup/:id/dashboard/profile', component:SupAdminProfileComponent },
  
  { path: 'drillSupervisorLogin', component:SupervisorLoginComponent },
  { path: 'drillOperatorLogin', component:OperatorLoginComponent },
  { path: 'supAdminLogin', component:SupAdminLoginComponent },
 
  { path: 'DrillSupervisor/:id/Dashboard', component:DrillSupervisorDashboardComponent },
  { path: 'DrillSupervisor/:id/Dashboard/profile', component:SupervisorProfileComponent },

  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages', component:ProjectStagesComponent },
  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages/edit', component:ProjectStagesEditComponent },
  
  { path: 'DrillSupervisor/:id/Dashboard/Project/:id2/Stages/New', component:NewStagesComponent },
  
  { path: 'DrillSupervisorReg', component:DrillSupervisorComponent },

  {path:'DrillOperatorReg',component:DrillOperatorComponent},

  { path: 'DrillOperator/:id/Dashboard', component:DrillOperatorDashboardComponent },
  { path: 'DrillOperator/:id/Dashboard/profile', component:OperatorProfileComponent},

  { path: 'DrillOperator/:id/Dashboard/project/:id2/ProjectOperating', component:StagesOperatingComponent },
  { path: 'DrillOperator/:id/Dashboard/project/:id2/ProjectOperating/operate', component:OperatingComponent },
  
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
