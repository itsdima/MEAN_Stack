import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'edit/:id', component: EditComponent}, 
  {path: 'create', component: CreateComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
