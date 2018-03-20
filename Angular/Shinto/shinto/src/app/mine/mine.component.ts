import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['../app.component.css']
})
export class MineComponent implements OnInit {
  msg = '';
  constructor(private _shinto: ShintoService) { }

  ngOnInit() {
  }
  mine(input){
    if(input == 13){
      this._shinto.minecoins();
      var randint = Math.trunc(Math.random()*(9999) + 1);
      this._shinto.newtransaction(randint, 1,  'Mined');
      this.msg = 'Succesfully mined 1 coin!';
      console.log(this.msg);
      console.log(this._shinto.browse());
    }
    else{
      this.msg = 'You suuuuuuuuck lol!';
      console.log(this.msg);
    }
  }

}
