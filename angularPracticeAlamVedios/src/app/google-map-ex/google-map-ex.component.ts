import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-google-map-ex',
  templateUrl: './google-map-ex.component.html',
  styleUrls: ['./google-map-ex.component.css']
})
export class GoogleMapExComponent implements OnInit {
  public title = 'Angular google api';
  public latitude: number;
  public longitude: number;
  public fillInAddress: '';
  public searchControl: FormControl;
  public zoom: number;
  public f_addr: string;
  public city: string;
  public country: string;
  public scountry: string;
  public postCode: string;
  public estab: string;
  public state: string;
  @ViewChild('search' ) public searchElement: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.zoom = 12;
    });
    }
    }
}
