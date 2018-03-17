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
  addTask(newTask){
    return this._http.post('/restfulapi', newTask);
  }
  updateTask(id, update){
    return this._http.put('/restfulapi/'+id, update);
  }
  deleterestful(id){
    return this._http.delete('/restfulapi/'+ id)
  }
}
