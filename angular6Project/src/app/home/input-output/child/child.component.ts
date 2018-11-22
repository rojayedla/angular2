import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input are get the data from parent to child
   // @Input('name') is the alias name for employeeName

 @Input() empmloyeeName: String;
 @Input() empmloyeeCity: String;
 @Input() empmloyeeSalary: number;
 // @Output is send the data from child to parent
 @Output() sendRecord: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
// get the data from parent object

  selectRecord() {
    const selectedEmpObj = {
      selectedName: this.empmloyeeName,
      selectedCity: this.empmloyeeCity,
      selectedSal: this.empmloyeeSalary,
    };
    this.sendRecord.emit(selectedEmpObj);
  }

}
