import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Post2Component } from './post2/post2.component';



const routes: Routes = [

  {path:'',component:HomeComponent},

  {path:'home',component:HomeComponent},

{path:'post2' ,component:Post2Component }

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Post2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
