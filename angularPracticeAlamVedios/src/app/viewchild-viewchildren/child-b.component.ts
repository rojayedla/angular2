import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'child-b',
    template: `<h2>{{msgTitle}}</h2>
    <h3>{{msg}}</h3>`,
})
export class ChildbComponent implements OnInit {
    msgTitle : string= 'Child B Default Tiltle messages';
    msg: string ='Child B Default message';
    ngOnInit(): void {
        
    }
}