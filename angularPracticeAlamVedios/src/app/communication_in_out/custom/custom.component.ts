import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  title = 'Custom Component';
  selectedEmployeeData:any = {};
  employeeRecord: any= [
    { eName: 'Sachin', eCity: 'Mumbai', eSalary: 10000 },
    { eName: 'Dhoni', eCity: 'Ranchi', eSalary: 15000  },
    { eName: 'Kohli', eCity: 'Delhi', eSalary: 20000  },
    { eName: 'Rahul', eCity: 'Hyderabad', eSalary: 10000  }];
  constructor() { }

  ngOnInit() {
  }
 getRecord(data: any): void {
this.selectedEmployeeData = data;
 }
}
