import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
// this is parent component
export class ParentComponent implements OnInit {
  title = 'component communication';
  selectedEmployeeData: any = {};
  employeeRecord: any = [
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
