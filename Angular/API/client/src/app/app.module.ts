import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http/src/client';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
