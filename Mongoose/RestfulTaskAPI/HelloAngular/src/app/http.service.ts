import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {  }
  getRestfulapi(){
    let tempObservable = this._http.get('/restfulapi');
    return tempObservable;
  }
  getOnerestful(e){
    if(e == ''){
      e = 'nothing';
    }
  	let tempObservable = this._http.get('/restfulapi/'+ e);
  	return tempObservable;
  }
}
