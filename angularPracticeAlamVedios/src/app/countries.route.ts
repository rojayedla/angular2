import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import { EagerComponent } from "./custom-modules/eager/eager.component";
const routes1: Routes = [
    //  {path: 'eager', component: EagerComponent},
     {path: 'Lazy', loadChildren: 'app/custom-modules/countries.module#CountriesModule'},

];
export const countryRouting: ModuleWithProviders = RouterModule.forRoot(routes1);
