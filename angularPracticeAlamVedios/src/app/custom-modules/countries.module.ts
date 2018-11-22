import {NgModule} from '@angular/core';
import { CountriesComponent } from '../communication_in_out/countries/countries.component';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { EmployeeService } from '../services/employee.serveice';
const countriesRoutes: Routes =[
    {path: '', redirectTo: 'country', pathMatch: 'full'},
    {path: 'country', component: CountriesComponent}
]

@NgModule({
    declarations:[
        CountriesComponent,
    ],
    imports: [CommonModule, 
            RouterModule.forChild(countriesRoutes)],
    providers:[EmployeeService],
    exports: [],

})
export class CountriesModule {

}