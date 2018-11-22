import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { SafteyFormComponent } from './saftey-form/saftey-form.component';
import { PipesExampleComponent } from './pipes/pipes-example/pipes-example.component';
import { HomeComponent } from './route_view/home/home.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormsExComponent } from './Forms/forms-ex/forms-ex.component';
import { ServiceExComponent } from './services-examples/service-ex/service-ex.component';
import { CustomComponent } from './communication_in_out/custom/custom.component';
import { EagerComponent } from './eager.component';
import { JavaComponent } from './route_view/java.component';
import { AndroidComponent } from './route_view/android.component';
import { JavaSpringComponent } from './route_view/home/java.spring.component';
import { JavaSwingComponent } from './route_view/java.swing.component';
import { CheckGuard } from './router-gaurd/check.guard';
import { DetailasComponent } from './route_view/details.component';
import { TemplateDrivenComponent } from './Forms/forms-ex/template-driven/template-driven.component';
import { ModelDrivenComponent } from './Forms/forms-ex/model-driven/model-driven.component';
import { MultiServComponent } from './multi-serv/multi-serv.component';
import { ViewComponent } from './viewchild-viewchildren/view/view.component';
import { GoogleMapExComponent } from './google-map-ex/google-map-ex.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'java', component: JavaComponent, canActivate: [CheckGuard],
    canActivateChild: [CheckGuard],
    children: [
      { path: 'spring', component: JavaSpringComponent },
      { path: 'swing', component: JavaSwingComponent },
    ]
  },

  {
    path: 'android', component: AndroidComponent, canLoad: [CheckGuard],
    children: [
      { path: 'type/:ideSelected', component: JavaSpringComponent },
    ]
  },
  { path: 'details', component: DetailasComponent, canDeactivate: [CheckGuard] },
  { path: 'pipeex', component: PipesExampleComponent },
  { path: 'directives', component: DirectivesExampleComponent },
  {
    path: 'forms', component: FormsExComponent,
    children: [
      { path: 'template', component: TemplateDrivenComponent },
      { path: 'modeldriven', component: ModelDrivenComponent },
    ]
  },
  { path: 'services', component: ServiceExComponent },
  { path: 'multiservices', component: MultiServComponent },
  { path: 'views', component: ViewComponent },

  { path: 'custom', component: CustomComponent },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
  { path: 'mapapi', component: GoogleMapExComponent },
  /* { path: 'Home', component: DashboardComponent,
 children:[
   {path:'profile',  component: UserProfileComponent},


 ]},
   {path:'',  redirectTo: '/login', pathMatch:'full'},
    { path: '**', component: NotFoundComponent }*/
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
