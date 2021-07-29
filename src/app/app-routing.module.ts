import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { RecpComponent } from './recp/recp.component';
import { SubComponent } from './sub/sub.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { StartersComponent } from './starters/starters.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { MealsComponent } from './meals/meals.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DesertComponent } from './desert/desert.component';
import { JuicesComponent } from './juices/juices.component';
const routes: Routes = [
  {path : "", pathMatch : 'full' , redirectTo : "home"},
  {path:'home',component:HomeComponent},
  {path:'history',component:HistoryComponent},
  {path:'service',component:ServiceComponent},
  {path:'products',component:ProductsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'sub', component:SubComponent},
  {path:'rec',component:RecpComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'stater',component:StartersComponent},
  {path:'break',component:BreakfastComponent},
  {path:'meals',component:MealsComponent},
  {path:'Dinner',component:DinnerComponent},
  {path:'Desert',component:DesertComponent},
  {path:'juice',component:JuicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
