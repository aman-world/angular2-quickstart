import { Component } from '@angular/core';
import { Employee } from './emp';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.template.html',
})
export class EmployeeListComponent {
    employeeList: Employee[] = [];
    error: string = '';

    constructor(private empService: EmployeeService) {
        this.employeeList = this.empService.getEmpList();
    }

    setEmployeeList() {
        this.empService.setEmpList(this.employeeList);
    }

    deleteEmployee(empNo: number) {
        let empIndex = this.employeeList.findIndex(emp => emp.empNo === empNo);
        if (empIndex !== -1) {
            this.employeeList.splice(empIndex, 1);
            this.setEmployeeList();
        }
    }
}
