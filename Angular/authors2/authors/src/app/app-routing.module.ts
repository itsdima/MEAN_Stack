import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewquoteComponent } from './newquote/newquote.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'edit/:id', component: EditComponent}, 
  {path: 'home/new', component: NewComponent},
  {path: 'home/quotes/:id', component: QuotesComponent},
  {path: 'home/quotes/:id/newquote', component: NewquoteComponent},
  // {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
