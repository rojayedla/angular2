import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TdfFormComponent } from './TDF/tdf-form/tdf-form.component';
import { ReactiveComponent } from './reactiveForms/reactive/reactive.component';
import { ParentComponent } from './input-output/parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'	},
  {path: 'home', component: HomeComponent },
  {path: 'tdfForms', component: TdfFormComponent},
  {path: 'reactive', component: ReactiveComponent},
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
