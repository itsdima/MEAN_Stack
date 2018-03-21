import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: any; 
  constructor(
    private _author: AuthorService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  edit(id){
    this._router.navigate(['/edit/'+id])
  }

  delete(id){
    var status = this._author.delete(id);
    status.subscribe(data =>{
      this.getAll();
    })
  }

  getAll(){
    var status = this._author.getAll();
    status.subscribe(data =>{
      this.allAuthors = data;
      console.log(data);
    })
  }

}
