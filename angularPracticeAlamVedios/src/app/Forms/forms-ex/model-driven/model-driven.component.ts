import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  public title = 'Angular Reactive Form';
  public userDetails: any;
  constructor() { 
    this.userDetails = new FormGroup ({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        country: new FormControl()
      })
      
    });
  }

  ngOnInit() {
  }
  onFormSubmit(): void {
    console.log( this.userDetails);
  }
}
