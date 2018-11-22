import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  //@Input('name') is the alias name for employeeName 

@Input('name') employeeName: string;
@Input('city') employeeCity: string;
@Input('salary') employeeSalary: string;
@Output() sendRecord: EventEmitter <any>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitSendRecordEvent() {
    let selectedEmpObj: any = {
     selectedName: this.employeeName,
     selectedCity: this.employeeCity,
     selectedSalary: this.employeeSalary
    }
    this.sendRecord.emit(selectedEmpObj);
  }

}
