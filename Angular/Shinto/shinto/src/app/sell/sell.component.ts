import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  value;
  total; 
  msg = '';
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
    var val = this._shinto.total();
    this.value = '$'+val;
    this.total = val; 
  }
  sellcoins(number){
    var num = parseInt(number);
    if(this.total - num < 0){
      this.msg = 'Yea we wish we were rich too...'
    }
    else if(number == ''){
      this.msg = 'Uuuummmmmm..'
    }
    else{
      this._shinto.sellcoins(num)
      var randint = Math.trunc(Math.random()*(9999) + 1);
      this._shinto.newtransaction(randint, num, 'Sold');
      var val = this._shinto.total();
      this.value = '$'+val;
      this.total = val;
    }
  }

}
