import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokeapiService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

   getPokemon(){
     let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
     return bulbasaur;
   }

   getallAbility(){
     let similar = this._http.get('https://pokeapi.co/api/v2/ability/34/');
     return similar; 
   }

}
