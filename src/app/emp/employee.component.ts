import { Component } from '@angular/core';
import { Employee } from './emp';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.template.html',
})
export class EmployeeComponent {
  e: Employee = new Employee();
  employeeList: Employee[];
  error: string = '';
  successMessage: string = '';
  pageIndex = 1;
  pages: number[] = [];
  userList: any;

  constructor(private empService: EmployeeService) {
    this.employeeList = this.empService.getEmpList();
    this.empService.getEmployeeList(this.pageIndex).subscribe(res => {
      this.userList = res;
      for (let index = 0; index < this.userList.total_pages; index++) {
        this.pages.push(index + 1);
      }
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

  setEmployeeList() {
    this.empService.setEmpList(this.employeeList);
  }

  addEmployee() {
    console.log(this.e);
    if (this.e && this.e.empNo === null) {
      this.error = 'Employee number can not be empty.';
      return;
    }
    if (this.employeeList.findIndex(emp => emp.empNo === this.e.empNo) !== -1) {
      this.error = 'Employee number already exists.';
      return;
    }
    this.setEmployeeDetails();
    this.employeeList.push(this.e);
    this.setEmployeeList();
    this.e = new Employee();
    this.successMessage = 'Employee details added successfully.';
  }

  deleteEmployee(empNo: number) {
    let empIndex = this.employeeList.findIndex(emp => emp.empNo === empNo);
    if (empIndex !== -1) {
      this.employeeList.splice(empIndex, 1);
      this.setEmployeeList();
    }
  }
}
