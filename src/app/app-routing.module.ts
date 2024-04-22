import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent 
},
{
  path: "home",
  component: HomeComponent 
},
{
  path: "gallery",
  component: GalleryComponent 
},
{
  path: "cards",
  component: CardsComponent 
},
{
  path: "form",
  component: FormComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
