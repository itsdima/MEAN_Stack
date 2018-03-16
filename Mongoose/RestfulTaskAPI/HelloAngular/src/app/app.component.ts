import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allTasks: any;
  oneTitle = String;
  oneDescription = String;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasks();
    this.getOneTask();
  }
  getTasks(){
    let observable = this._httpService.getRestfulapi();
    observable.subscribe(data => {
      console.log('all', data);
      this.allTasks = data;
    });
  }
  getOneTask(){
    let OneObservable = this._httpService.getOnerestful();
    OneObservable.subscribe(data =>{
      console.log('one', data);
      this.oneTitle = data[0].title;
      this.oneDescription = data[0].description;
    });
  }
}
