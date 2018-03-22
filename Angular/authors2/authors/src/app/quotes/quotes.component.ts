import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../app.component.css']
})
export class QuotesComponent implements OnInit {
  Name: any; 
  quotes: any; 
  id: any;
  authorId: any;  
  constructor(
    private _author: AuthorService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    });
    this.getAuthor(this.id);
  }

  getAuthor(id){
    var status = this._author.getOne(id);
    status.subscribe(data => {
      this.Name = data[0].Name;
      this.quotes = data[0].quotes; 
      this.authorId = data[0]._id;
    })
  }

  vote(index, value){
    var status = this._author.addVote(this.authorId, index, value);
    status.subscribe(data => {
      this.getAuthor(this.id);
    })
  }

  delete(index){
    var status = this._author.deleteQuote(this.authorId, index);
    status.subscribe(data => {
      this.getAuthor(this.id);
    })
  }

}
