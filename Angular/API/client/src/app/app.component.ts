import { Component } from '@angular/core';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name = 'Bulbasaur';
  Others = [];
  constructor(private _pokeapiService: PokeapiService){
    let observable = _pokeapiService.getPokemon();
    observable.subscribe(data => console.log('GOOOO! '+ data['name'], 'Abilities: '+data['abilities'][0]['ability']['name']));
    let similarPoke = _pokeapiService.getallAbility();
    similarPoke.subscribe(data => {
      console.log('Similar Pokemon: ');
      for(let i = 1; i< data['pokemon'].length; i++){
        console.log(data['pokemon'][i]['pokemon']['name']);
        this.Others.push(data['pokemon'][i]['pokemon']['name']);
      }
    });
  }

}
