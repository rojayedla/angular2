import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  public title = "pipe example demo";
  public firstName = "Angular";
  public lastName = "Directive example"
  public myStyle = {
    'color': 'blue',
    'background-color': 'yellow'
  };

  public players = [
    {'name': 'Sachin', 'city': 'Mumbai'},
    {'name': 'Kohili', 'city': 'New Delhi'},
    {'name': 'Dhoni', 'city': 'Maharasta'}
  ];
  public amount= 10;
  public score= .1;
  public todayDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
