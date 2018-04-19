import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App1Component } from './app1.component';
import { App2Component } from './app2.component';
import { App3Component } from './app3.component';
import { EmployeeComponent } from './emp/employee.component';
import { EmployeeDetailsComponent } from './emp/employee-details.component';

import { EmployeeService } from './services/employee.service';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [App1Component, App2Component, App3Component, EmployeeComponent, EmployeeDetailsComponent],
  bootstrap: [App1Component, EmployeeComponent],
  providers: [EmployeeService]
})
export class AppModule { }
