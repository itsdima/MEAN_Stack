import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allTasks: any;
  newTask: any;
  updateTask: any;
  oneTitle = String;
  oneDescription = String;
  show = false;
  edit = false;
  tempID = String;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = {title: '', description: ''}
    this.updateTask = {title: '', description: ''}
  }
  create (){
    let create = this._httpService.addTask(this.newTask)
    create.subscribe(data => {
      this.buttonAll();
    })

    //send form to service
    this.newTask = {title: '', description: ''}
  }
  cancelUpdate(){
    this.edit = false;
  }
  update(){
    let update = this._httpService.updateTask(this.tempID, this.updateTask)
    update.subscribe(data => {
      console.log(data);
      this.buttonAll();
      this.edit = false;
      this.updateTask = {title: '', description: ''}
    })

  }
  buttonAll(){
    this.getTasks();
  }
  buttonDelete(id){
    this.deleteTask(id);
  }
  hideAll(){
    console.log('done')
    this.show = false;
  }
  buttonOne(e){
    console.log(e);
    this.getOneTask(e);
  }
  buttonEdit(id){
    this.getOneTask(id)
    this.edit = true;
    this.tempID = id;
  }
  getTasks(){
    let observable = this._httpService.getRestfulapi();
    observable.subscribe(data => {
      console.log('all', data);
      this.allTasks = data;
      this.show = true;
    });
  }
  deleteTask(id){
    let deleted = this._httpService.deleterestful(id)
    deleted.subscribe(data => {
      console.log(data);
      this.buttonAll();
    })
  }
  getOneTask(e){
    let OneObservable = this._httpService.getOnerestful(e);
    OneObservable.subscribe(data =>{
      console.log('one', data);
      this.oneTitle = data[0].title;
      this.oneDescription = data[0].description;
      this.show = true;
      this.updateTask = {title: this.oneTitle, description: this.oneDescription}
    });
  }
}
