import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any; 
  errors: {title: String, price: String};
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {title: '', url: '', price: 0};
    this.errors = {title: '', price: ''};
  }

  add(){
    var status = this._http.addProduct(this.newProduct);
    status.subscribe(data => {
      console.log(data, 'returned from add');
      if(data['errors']){
        if(data['errors']['title']){
          this.errors.price = ''
          this.errors.title = 'Title should be at least 4 Characters';
        }
        else if(data['errors']['price']){
          this.errors.title = ''
          this.errors.price = 'Please specify Price';
        }
      }
      else{
        this._router.navigate(['/products']);
      }
    });
  }

}
