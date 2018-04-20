import { Injectable } from '@angular/core';
import { Employee } from '../emp/emp';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    emp: Employee;
    empList: Employee[] = [];
    constructor(private http: Http) {
        console.log('Emp constructor ...');
    }

    public getEmployeeList(pageIndex: number): Observable<Response> {
        let url = 'https://reqres.in/api/users?page=' + pageIndex;
        return this.http.get(url).map(resp => resp.json());
    }

    // errorHandler(err: any) {
    //     console.log('Error: ', err);
    // }

    // public getEmployeeList(): any {
    //     let url = 'https://reqres.in/api/users?page=1';
    //     this.http.get(url).subscribe((res: any) => {
    //         console.log(res);
    //     }, this.errorHandler);
    // }

    public setEmp(emp: Employee): void {
        this.emp = emp;
    }

    public getEmp(): Employee {
        return this.emp;
    }

    public setEmpList(empList: Employee[]): void {
        this.empList = empList;
    }

    public getEmpList(): Employee[] {
        return this.empList;
    }
}
