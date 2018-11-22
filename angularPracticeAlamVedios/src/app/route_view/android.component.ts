
import {Component} from '@angular/core';

@Component({
    template: `<div style="width:350px; height:200px; background-color:green;">
    <h2>This is Android Page</h2>
    
    <router-outlet></router-outlet>
    </div>`
})
export class AndroidComponent {}