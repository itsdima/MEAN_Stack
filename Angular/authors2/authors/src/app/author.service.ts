import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private _author: HttpClient) { }

  addAuthor(author){
    var body = {Name: author};
    return this._author.post('/author', body);
  }

  getAll(){
    return this._author.get('/author');
  }

  delete(id){
    return this._author.delete('/author/'+id);
  }
  getOne(id){
    return this._author.get('/author/'+id);
  }
  update(id, author){
    var body = {Name: author};
    return this._author.put('/author/'+id, body);
  }
}
