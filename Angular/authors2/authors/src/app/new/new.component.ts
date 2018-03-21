import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../app.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  errors: any; 
  constructor(
    private _author: AuthorService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = '';
  }

  add(){
    console.log(this.newAuthor);
    var status = this._author.addAuthor(this.newAuthor);
    status.subscribe(data => {
      console.log(data, 'returned from add');
      if(data['error']){
        this.errors = data['error'];
      }
      else{
      this.errors = '';
      this._router.navigate(['/home']);
      }
    });

  }

}
