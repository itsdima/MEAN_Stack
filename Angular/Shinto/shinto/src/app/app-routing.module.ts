import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { BuyComponent } from './buy/buy.component';
import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'browse', component: BrowseComponent}, 
  {path: 'buy', component: BuyComponent}, 
  {path: 'mine', component: MineComponent}, 
  {path: 'sell', component: SellComponent}, 
  {path: 'browse/details/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
