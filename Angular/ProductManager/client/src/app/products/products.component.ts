import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../app.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    var status = this._http.getAll();
    status.subscribe(data => {
      this.allProducts = data; 
      console.log(data, 'from subscribe');
    })
  }

  edit(id){
    this._router.navigate(['/edit/'+id]);
  }

  delete(id){
    var status = this._http.delete(id);
    status.subscribe(data =>{
      this.getAll();
    })
  }

}
