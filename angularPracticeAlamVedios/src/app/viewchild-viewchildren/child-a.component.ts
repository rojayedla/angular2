import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'child-a',
    template: `<h1>Child a Component</h1>
    <h2>{{msgTitle}}</h2>
    <h3>{{msg}}</h3>`,
})
export class ChildaComponent implements OnInit {
    msgTitle : string= 'Default Tiltle messages';
    msg: string ='Default message';
    ngOnInit(): void {
        
    }
}