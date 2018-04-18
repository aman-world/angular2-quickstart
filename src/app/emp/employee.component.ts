import { Component } from '@angular/core';
import { Employee } from './emp';
@Component({
  selector: 'employee',
  templateUrl: './employee.template.html',
})
export class EmployeeComponent {
  e: Employee = new Employee();
  employeeList: Employee[] = [];
  error: string = '';

  addEmployee() {
    console.log(this.e);
    if (this.employeeList.findIndex(emp => emp.empNo === this.e.empNo) !== -1) {
      this.error = 'Employee number already exists.';
      return;
    }
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
