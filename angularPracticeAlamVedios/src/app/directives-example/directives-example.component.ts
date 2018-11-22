import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  public title = 'directive example';
  public firstName = 'Angular';
  public lastName = 'Directive example';
  public myStyle = {
    'color': 'blue',
    'background-color': 'yellow'
  };

  public showText = false;
  public textColor = 'GREEN';
  public players = [
    {'name': 'Sachin', 'city': 'Mumbai'},
    {'name': 'Kohili', 'city': 'New Delhi'},
    {'name': 'Dhoni', 'city': 'Maharasta'}
  ];
  public isHidden = false;

  public swithOff() {
    this.showText = !this.showText;
  }

  constructor() { }

  ngOnInit() {
  }

}
