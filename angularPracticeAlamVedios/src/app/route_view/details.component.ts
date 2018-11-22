
import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `<div >
    <h2>DetailasComponent</h2>
    <form>
        Enter First Name: <input type="text" name="fname"><br/>
        Enter Last Name: <input type="text" name="lname"><br/>
        <button (click)='gotoHome()'>Home</button>
        </form>
    </div>`
})
export class DetailasComponent {
    constructor (private router: Router) {}
    gotoHome (): void {
        this.router.navigate(['/home'])
    }
}