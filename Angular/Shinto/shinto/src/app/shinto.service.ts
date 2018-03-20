import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShintoService {
  transactions = [];
  totalcoins = 0; 
  constructor(private _shinto: HttpClient) { }

  newtransaction(transaction, amount, action){
   var temp = {'Action': action, 'Amount': amount, 'Value': this.totalcoins, 'TN': transaction};
   this.transactions.push(temp);

  }
  minecoins(){
    this.totalcoins += 1;
  }
  buycoins(number){
    this.totalcoins += number; 
  }
  sellcoins(number){
    this.totalcoins -= number;
  }

  total(){
    return this.totalcoins;
  }
  browse(){
    return this.transactions;
  }


}
