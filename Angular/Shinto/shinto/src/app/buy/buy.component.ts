import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = '';
  total;
  msg = '';
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    var val = this._shinto.total();
    this.value = '$'+ val;
    this.total = val;
  }
  buycoins(number){
    if(number == ''){
      this.msg = 'ummmmm...'
    }
    else{
      this._shinto.buycoins(parseInt(number));
      var randint = Math.trunc(Math.random()*(9999) + 1);
      this._shinto.newtransaction(randint, parseInt(number), 'Bought');
      var val = this._shinto.total();
      this.value = '$'+val; 
      this.total = val; 
      this.msg = 'Succesfully bought ' +number+' Coins!';
    }
  }

}
