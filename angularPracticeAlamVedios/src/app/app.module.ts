import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
//import { SafteyFormComponent } from './saftey-form/saftey-form.component';

import { routing } from './app.routing';
import { MyCustomDirective } from './custom-directives/hover-directive';
import { MyStructuralDirective } from './custom-directives/structural-directive';
import { PipesExampleComponent } from './pipes/pipes-example/pipes-example.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { PipeWithParameterPipe } from './pipes/pipe-with-parameter.pipe';
import { HomeComponent } from './route_view/home/home.component';
import { FormsExComponent } from './Forms/forms-ex/forms-ex.component';
import { ServiceExComponent } from './services-examples/service-ex/service-ex.component';
import { CustomComponent } from './communication_in_out/custom/custom.component';
import { DataComponent } from './communication_in_out/data/data.component';
import { EmployeeService } from './services/employee.serveice';
import { countryRouting } from './countries.route';
import { EagerComponent } from './eager.component';
import { JavaComponent } from './route_view/java.component';
import { AndroidComponent } from './route_view/android.component';
import { JavaSpringComponent } from './route_view/home/java.spring.component';
import { JavaSwingComponent } from './route_view/java.swing.component';
import { CheckGuard } from './router-gaurd/check.guard';
import { DetailasComponent } from './route_view/details.component';
import { ModelDrivenComponent } from './Forms/forms-ex/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './Forms/forms-ex/template-driven/template-driven.component';
import { WeatherService } from './services/weather.service';
import { MultiServComponent } from './multi-serv/multi-serv.component';
import { ViewComponent } from './viewchild-viewchildren/view/view.component';
import { ChildaComponent } from './viewchild-viewchildren/child-a.component';
import { ChildbComponent } from './viewchild-viewchildren/child-b.component';
import {AgmCoreModule} from '@agm/core';
import { GoogleMapExComponent } from './google-map-ex/google-map-ex.component';
 // import { CountriesModule } from './custom-modules/countries.module';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    // SafteyFormComponent,
    MyCustomDirective,
    MyStructuralDirective,
    PipesExampleComponent,
    CustomPipePipe,
    PipeWithParameterPipe,
    HomeComponent,
    FormsExComponent,
    ServiceExComponent,
    CustomComponent,
    DataComponent, EagerComponent,
     JavaComponent, JavaSpringComponent, JavaSwingComponent,
     AndroidComponent,
     DetailasComponent,
     ModelDrivenComponent,
     TemplateDrivenComponent,
     MultiServComponent,
     ViewComponent, ChildaComponent, ChildbComponent, GoogleMapExComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
       apiKey: 'y9srm2hnpl5ND2lErR1dS',
       libraries: ['places']
    }),
       BrowserAnimationsModule,
    routing, FormsModule, ReactiveFormsModule,
    HttpModule,
    RouterModule, countryRouting// CountriesModule
  ],
  providers: [EmployeeService, CheckGuard, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
