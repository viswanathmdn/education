import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/login/login.component'
import { HomeComponent } from './home/home.component';
import { NonTechnicalComponent } from './non-technical/non-technical.component';
import {RegisterComponent} from './register/register.component'
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
   },
   {
    path:'home',component:HomeComponent
   },
   {
     path:'technical',component:TechnicalComponent
   },
   {
     path:'non-technical', component:NonTechnicalComponent
   },
   {path:"register", component : RegisterComponent},
   {
    path:'',redirectTo:'login',pathMatch:'prefix'
   },
   {
    path:'**',redirectTo:'login',pathMatch:'prefix'
   }
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
