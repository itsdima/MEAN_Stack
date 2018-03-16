import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
  	this.getRestfulapi();
  	this.getOnerestful();
  }
  getRestfulapi(){
    let tempObservable = this._http.get('/restfulapi');
    return tempObservable;
  }
  getOnerestful(){
  	let tempObservable = this._http.get('/restfulapi/5aa98992e5e0853198118272');
  	return tempObservable;
  }
}
