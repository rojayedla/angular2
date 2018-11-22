import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { EmployeeService } from '../services/employee.serveice';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/Observable/forkJoin';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-multi-serv',
  templateUrl: './multi-serv.component.html',
  styleUrls: ['./multi-serv.component.css']
})
export class MultiServComponent implements OnInit {
  private title = 'Multiple Sevice Call Demo';
  tableHeading = '';
  public cityDetails: any = {
    humidity: 0,
    pressure:0,
    sunrise: 0,
    sunset: '',
    country: '',
    city: ''
  };

  constructor(private weatherServ: WeatherService, private empService: EmployeeService) { }

  ngOnInit() {
  }
  setWeatherData(weatherData:any): void {
    this.tableHeading =  weatherData.query.results.channel.title;
    const channel = weatherData.query.results.channel;
    console.log('set weather', weatherData);

    this.cityDetails.humidity =  channel.atmosphere.humidity;
    this.cityDetails.pressure = channel.atmosphere.pressure;
    this.cityDetails.sunrise =  channel.astronomy.sunrise;
    this.cityDetails.sunset =  channel.astronomy.sunset;
    this.cityDetails.country =  channel.location.country;
    this.cityDetails.city =  channel.location.city;

  }
  getForeCost(): void{
   this.empService.getCountriesDetails('india').map(res=>res.json() )
    .subscribe(country=> 
      this.weatherServ.getCityWeatherForecast(country[0].capital)
      .subscribe(details =>this.setWeatherData(details.json()))

  );

  //or can use another way of calling service using with merge map
  // this.empService.getCountriesDetails('india').map(res=>res.json() )
  // .mergeMap(country=> 
  //   this.weatherServ.getCityWeatherForecast(country[0].capital)
  //   .subscribe(details =>console.log('dddddd', details.json())));
  }

  //another way of calling 2 services

  getCityDetials(): void{
    const capitalCityDetails = this.empService.getCountriesDetails('india').map(res=>res.json() );
    const weatherDetails = this.weatherServ.getCityWeatherForecast('New Delhi').map(res=>res.json());
    Observable.forkJoin([capitalCityDetails, weatherDetails]).subscribe(results =>
      this.setWeatherData1(results[0],results[1])

    );
    console.log('city detials');
}

setWeatherData1 (cityData: any, weatherData: any):void{
  this.tableHeading =  weatherData.query.results.channel.title;
   const channel = weatherData.query.results.channel;
   
  console.log( weatherData);
     this.cityDetails.country =  cityData[0].name;
     this.cityDetails.city =   cityData[0].capital;
     this.cityDetails.humidity =  channel.atmosphere.humidity;
    this.cityDetails.pressure = channel.atmosphere.pressure;
    this.cityDetails.sunrise =  channel.astronomy.sunrise;
    this.cityDetails.sunset =  channel.astronomy.sunset;
 
}

}
