import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';;
// import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
// import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';
import { DatabaseComponent } from './database/database.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';

const route: Routes = [
  // {path:'', component:AppComponent},
  // {path:'display', component: DisplayComponent},
  {path:'input', component: InputComponent},
  {path:'database', component: DatabaseComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    // DisplayComponent,
    InputComponent,
    DatabaseComponent,
    GoogleSignInComponent,
    // MatAutocompleteModule,
    // MatInputModule,
    // BrowserAnimationsModule

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
