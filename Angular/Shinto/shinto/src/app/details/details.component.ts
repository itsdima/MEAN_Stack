import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id;
  oneDetail;
  constructor(private _shinto: ShintoService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> 
    this.id = params['id']);
    
    var all = this._shinto.browse();
    for(var one = 0; one < all.length; one++){
      if(all[one].TN == this.id){
        this.oneDetail = all[one];
      }
    }

  }
  back(){
    this._router.navigate(['/browse']);
  }


}
