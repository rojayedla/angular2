import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.serveice';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countriesList: any;
  constructor(private empSerive: EmployeeService) { }

  ngOnInit() {
    this.empSerive.getCountries().subscribe(res => {
      this.countriesList = res.json();
      console.log(this.countriesList);
    });
  }

}
