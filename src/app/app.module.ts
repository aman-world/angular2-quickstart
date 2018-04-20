import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { App1Component } from './app1.component';
import { App2Component } from './app2.component';
import { App3Component } from './app3.component';
import { EmployeeComponent } from './emp/employee.component';
import { EmployeeListComponent } from './emp/employee-list.component';
import { EmployeeDetailsComponent } from './emp/employee-details.component';

import { EmployeeService } from './services/employee.service';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: App1Component },
      { path: 'employee', component: EmployeeComponent },
      { path: 'list', component: EmployeeListComponent },
      { path: 'details', component: EmployeeDetailsComponent },
      { path: '', redirectTo: 'employee', pathMatch: 'full' }])],
  declarations: [App1Component, App2Component, App3Component, EmployeeComponent, EmployeeDetailsComponent, EmployeeListComponent],
  bootstrap: [App1Component],
  providers: [EmployeeService]
})
export class AppModule { }
