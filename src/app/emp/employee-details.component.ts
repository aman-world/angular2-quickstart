import { Component } from '@angular/core';
import { Employee } from './emp';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employee-details',
    templateUrl: './employee-details.template.html',
})
export class EmployeeDetailsComponent {
    e: Employee;
    constructor(private empService: EmployeeService) { }

    getEmployeeDetails() {
        this.e = this.empService.getEmp();
    }
};
