import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../app.component.css']
})
export class EditComponent implements OnInit {
  updateProduct: any; 
  id: any; 
  errors: any; 

  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.updateProduct = {title: '', url: '', price: 0};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    });
    this.getOneProduct(this.id);
    this.errors = {title: '', price: ''};
  }

  getOneProduct(id){
    var status = this._http.getOneProduct(id);
    status.subscribe(data =>{
      this.updateProduct = {title: data[0].title, price: data[0].price, url: data[0].url}; 
    })
  }

  update(){
    var status = this._http.updateProduct(this.id, this.updateProduct);
    status.subscribe(data => {
      console.log(data, 'returned from update');
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
