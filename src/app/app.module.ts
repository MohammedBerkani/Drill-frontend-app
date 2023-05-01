import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateValueAccessor, DateValueAccessorModule } from 'angular-date-value-accessor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { ApiService } from './services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './components/project/project.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DrillSupervisorComponent } from './components/drill-supervisor/drill-supervisor.component';
import { DrillSupervisorDashboardComponent } from './components/drill-supervisor-dashboard/drill-supervisor-dashboard.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ButtonComponent } from './components/button/button.component';
import { ProjectStagesComponent } from './components/project-stages/project-stages.component';
import { FirstStageComponent } from './components/first-stage/first-stage.component';
import { SecondStageComponent } from './components/second-stage/second-stage.component';
import { ThirdStageComponent } from './components/third-stage/third-stage.component';
import { LastStageComponent } from './components/last-stage/last-stage.component';
import { DrillOperatorComponent } from './components/drill-operator/drill-operator.component';
import { DrillOperatorDashboardComponent } from './components/drill-operator-dashboard/drill-operator-dashboard.component';
import { LocalDateValueAccessor, LocalDateValueAccessorModule } from 'angular-date-value-accessor';

import { NewStagesComponent } from './components/new-stages/new-stages.component';
import { ProjectStagesEditComponent } from './components/project-stages-edit/project-stages-edit.component';
import { FirstStageEditComponent } from './components/first-stage-edit/first-stage-edit.component';
import { SecondStageEditComponent } from './components/second-stage-edit/second-stage-edit.component';
import { ThirdStageEditComponent } from './components/third-stage-edit/third-stage-edit.component';
import { LastStageEditComponent } from './components/last-stage-edit/last-stage-edit.component';
import { StagesOperatingComponent } from './components/stages-operating/stages-operating.component';
import { OperatingComponent } from './components/operating/operating.component';
import { OperateStageOneComponent } from './components/operate-stage-one/operate-stage-one.component';
import { OperateStageTwiComponent } from './components/operate-stage-twi/operate-stage-twi.component';
import { OperateStageThreeComponent } from './components/operate-stage-three/operate-stage-three.component';
import { OperateStageFourComponent } from './components/operate-stage-four/operate-stage-four.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ErrorInterceptorInterceptor } from './error-interceptor.interceptor';
import { SupAdminComponent } from './components/sup-admin/sup-admin.component';
import { SupAdminDashboardComponent } from './components/sup-admin-dashboard/sup-admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
   
    AppComponent,
    AdminComponent,
    AdminRegComponent,
    ProjectComponent,
    AdminDashboardComponent,
    DrillSupervisorComponent,
    DrillSupervisorDashboardComponent,
    EditProjectComponent,
    ButtonComponent,
    ProjectStagesComponent,
    FirstStageComponent,
    SecondStageComponent,
    ThirdStageComponent,
    LastStageComponent,
    DrillOperatorComponent,
    DrillOperatorDashboardComponent,

    NewStagesComponent,
     ProjectStagesEditComponent,
     FirstStageEditComponent,
     SecondStageEditComponent,
     ThirdStageEditComponent,
     LastStageEditComponent,
     StagesOperatingComponent,
     OperatingComponent,
     OperateStageOneComponent,
     OperateStageTwiComponent,
     OperateStageThreeComponent,
     OperateStageFourComponent,
     MapComponent,
     SupAdminComponent,
     SupAdminDashboardComponent,
     HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DateValueAccessor,DateValueAccessorModule,
    HttpClientModule,
    LeafletModule
   
  ],
  providers: [ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
