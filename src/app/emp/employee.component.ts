import { Component } from '@angular/core';
import { Employee } from './emp';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.template.html',
})
export class EmployeeComponent {
  e: Employee = new Employee();
  employeeList: Employee[] = [];
  error: string = '';
  pageIndex = 1;
  pages: number[] = [];
  userList: any;

  constructor(private empService: EmployeeService) {
    this.empService.getEmployeeList(this.pageIndex).subscribe(res => {
      for (let index = 0; index < res.total_pages; index++) {
        this.pages.push(index + 1);
      }
      this.userList = res;
      console.log(this.userList);
    });
  }

  loadPage(pageIndex: number) {
    this.empService.getEmployeeList(pageIndex).subscribe(res => {
      this.userList = res;
      console.log(this.userList);
    });
  }

  setEmployeeDetails() {
    this.empService.setEmp(this.e);
  }

  addEmployee() {
    console.log(this.e);
    if (this.employeeList.findIndex(emp => emp.empNo === this.e.empNo) !== -1) {
      this.error = 'Employee number already exists.';
      return;
    }
    this.setEmployeeDetails();
    this.employeeList.push(this.e);
    this.e = new Employee();
  }

  deleteEmployee(empNo: number) {
    let empIndex = this.employeeList.findIndex(emp => emp.empNo === empNo);
    if (empIndex !== -1) {
      this.employeeList.splice(empIndex, 1);
    }
  }
}
