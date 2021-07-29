import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    HomeComponent,
    ProductsComponent,
    ServiceComponent,
    RecpComponent,
    SubComponent,
    LoginComponent,
    SignupComponent,
    StartersComponent,
    BreakfastComponent,
    MealsComponent,
    DinnerComponent,
    DesertComponent,
    JuicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
