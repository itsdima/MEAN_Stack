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
  showOne = false;
  constructor(private _httpService: HttpService){}
  // ngOnInit(){
  //   this.getTasks();
  //   this.getOneTask();
  // }
  buttonAll(){
    this.getTasks();
  }
  buttonOne(e){
    console.log(e);
    this.getOneTask(e);
  }
  getTasks(){
    let observable = this._httpService.getRestfulapi();
    observable.subscribe(data => {
      console.log('all', data);
      this.allTasks = data;
    });
  }
  getOneTask(e){
    let OneObservable = this._httpService.getOnerestful(e);
    OneObservable.subscribe(data =>{
      console.log('one', data);
      this.oneTitle = data[0].title;
      this.oneDescription = data[0].description;
      this.showOne = true;
    });
  }
}
