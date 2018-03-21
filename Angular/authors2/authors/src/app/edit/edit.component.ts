import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../app.component.css']
})
export class EditComponent implements OnInit {
  updateAuthor: any; 
  id: any; 
  errors: any; 
  constructor(
    private _author: AuthorService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>
    this.id = params['id']);
    this.getOne(this.id);
  }
  getOne(id){
    var status = this._author.getOne(id);
    status.subscribe(data => {
      this.updateAuthor = data[0].Name;
    })
  }
  update(){
    var status = this._author.update(this.id, this.updateAuthor);
    status.subscribe(data => {
      console.log(data);
      if(data['error']){
        this.errors = data['error'];
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }

}
