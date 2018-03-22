import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProduct(data){
    return this._http.post('/product', data);
  }

  getAll(){
    return this._http.get('/product');
  }

  delete(id){
    return this._http.delete('/product/'+id);
  }

  getOneProduct(id){
    return this._http.get('/product/'+id);
  }

  updateProduct(id, body){
    return this._http.put('/product/'+id, body);
  }
}
