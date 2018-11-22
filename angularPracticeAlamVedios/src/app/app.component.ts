import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {}
  gotoJava(): void {
    console.log('gotoJava');
 this.router.navigate(['/java']);
  }

  gotoAndroid(): void {
    console.log('goto android');
 this.router.navigate(['/android']);
  }
}
