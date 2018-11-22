import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.serveice';

@Component({
  selector: 'app-service-ex',
  templateUrl: './service-ex.component.html',
  styleUrls: ['./service-ex.component.css'],
  providers: [EmployeeService]
})
export class ServiceExComponent implements OnInit {
  public title = 'Service Example';
  public employeeObj: any;
  public empId: string;
  getEmpObj: boolean = false;
  getCouObj: boolean = false;
  public countryObj: any;
  countryName: any;
  countriesList: any;
  profileObj: any = {name:'', job:'',city:'', id:''};
  constructor(private empSerive: EmployeeService) {
   
   }
   ngOnInit() {
    this.getAllCountries();
  }

   getEmployeeDetails(): void {
    this.getEmpObj = true;    
    this.employeeObj = this.empSerive.getEmployee(this.empId);
     console.log(this.employeeObj);

   }

   getCountryInfo(){
   
     this.getCouObj = true;
    this.empSerive.getCountriesDetails(this.countryName).subscribe(res=>{
        this.countryObj = res.json()[0];
    });
   }

   getAllCountries() {
     this.empSerive.getCountries().subscribe(res=>{
       this.countriesList = res.json();
     });
   }

   saveUserProfile() {
     this.empSerive.saveProfile().subscribe(res=>{
       this.profileObj = res;
      });
   }
 
}
