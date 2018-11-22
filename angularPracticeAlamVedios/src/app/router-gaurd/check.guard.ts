import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import { DetailasComponent } from '../route_view/details.component';
@Injectable()

export class CheckGuard implements CanActivate, CanActivateChild,
CanDeactivate<DetailasComponent>, CanLoad {

   canActivate(): boolean {
       return confirm('Are you enrolled for java course' );
   }

   canActivateChild(): boolean  {
    return confirm('Are you enrolled for java Spring and Swing ');
}

canDeactivate(template: DetailasComponent): boolean {
    return confirm('Are you sure want you want to navigate from this page');
}
canLoad(): boolean  {
    return confirm('canLoad method ');
}
}
