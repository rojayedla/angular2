import {Component} from '@angular/core';

@Component({
    template: `<div style="width:350px; height:200px; background-color:green;">
    <h2>Java Component </h2>
    <a [routerLink]="['spring']">Spring</a>
    <br/>
    <a [routerLink]="['swing']">Swing</a>

   
    <router-outlet></router-outlet>
    </div>`
})
export class JavaComponent {}