import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['../app.component.css']
})
export class NewquoteComponent implements OnInit {
  newQuote: any; 
  errors: {quote: String};
  id: any; 
  constructor(
    private _author: AuthorService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.newQuote = {quote: ''};
    this.errors = {quote: ''};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    });
  }

  addQuote(){
    console.log('processing')
    var status = this._author.addQuote(this.id, this.newQuote);
    status.subscribe(data => {
      console.log(data, 'returned from add'); 
      if(data['errors']){
        this.errors = {quote: 'Quote must be at least 3 characters long!'};
      }
      else{
        this.goBack();
      }
    });
  }

  goBack(){
    this._router.navigate(['/home/quotes/'+this.id]);
  }

}
