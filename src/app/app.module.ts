import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App1Component } from './app1.component';
import { App2Component } from './app2.component';
import { App3Component } from './app3.component';
import { EmployeeComponent } from './emp/employee.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [App1Component, App2Component, App3Component, EmployeeComponent],
  bootstrap: [App1Component, EmployeeComponent]
})
export class AppModule { }
