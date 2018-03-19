import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['../app.component.css']
})
export class ChicagoComponent implements OnInit {
  humidity: any; 
  avg: any; 
  high: any; 
  low: any;
  status;
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    let observable = this._weather.getWeather('q=Seattle,us');
    observable.subscribe(res => {
      console.log(res);
      this.humidity = res['main']['humidity'];
      this.avg = (Math.trunc(((((res["main"]["temp"])-273.15)*1.8)+32)*100))/100;
      this.high = (Math.trunc(((((res["main"]["temp_max"])-273.15)*1.8)+32)*100))/100;
      this.low = (Math.trunc(((((res["main"]["temp_min"])-273.15)*1.8)+32)*100))/100;
      this.status = res['weather'][0]['description'];
    })
  }

}
