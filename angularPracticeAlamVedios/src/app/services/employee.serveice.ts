import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeeService {
    public employeeRecords = [
        { name: 'Sachin', city: 'Mumbai', age: 35, id: 'e1' },
        { name: 'Dhoni', city: 'Ranchi', age: 30, id: 'e2' },
        { name: 'Kohli', city: 'Delhi', age: 24, id: 'e3' },
        { name: 'Rahul', city: 'Hyderabad', age: 26, id: 'e4' }];
    constructor(private _http: Http) { }

    public getEmployee(id: string): any {
        let employee: any;
        for (let i = 0; i < this.employeeRecords.length; i++) {
            if (id === this.employeeRecords[i].id) {
                employee = this.employeeRecords[i];
                break;
            }
        }
        return employee;
    }

    //https://restcountries.eu/rest/v2/name/india?fullText=true
    //https://restcountries.eu/rest/v2/all
    getCountriesDetails(countryName: string): any {
        const _url: string = 'https://restcountries.eu/rest/v2/name/' + countryName + '?fullText=true';
        return this._http.get(_url);

    }

    getCountries(): any {
        let _url: string = 'https://restcountries.eu/rest/v2/all';

        return this._http.get(_url);

    }

    saveProfile() {
     let _url:string='https://reqres.in/api/users';
     return this._http.post(_url, {name:'aaa',job:'developer',city:'hyderabad'})
     .map((res: Response)=>res.json())
     .catch(this._errorHandler);
    }

    private _errorHandler(error:Response) {
        console.log('Some Error'+error);
        return Observable.throw(error || 'Some error occured');
    }
}
