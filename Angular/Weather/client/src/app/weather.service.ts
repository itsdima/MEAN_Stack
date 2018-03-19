import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private _weather: HttpClient) { }
  getWeather(city){
    const endpoint =  "http://api.openweathermap.org/data/2.5/weather?"+city+"&&appid=0e436b5e105ad9f1ba4bf129f7cdcd27";
    return this._weather.get(endpoint)
      // .get(endpoint)
      // .subscribe(res => {
      //   // console.log('weather json reponse = '+ JSON.stringify(res))
      //   res;
      // }
  
  }

}
