import { Component, Input, ViewChild, ElementRef } from '@angular/core';
// import { DatabaseComponent } from './database/database.component'
// import 'google.js';
declare const gapi : any;
// declare auth2: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DatabaseComponent]
})
export class AppComponent {
  title = 'AssignmentForms';
  auth2 : any
  constructor(){
    // gapi.load('auth2', function() {
    //   this.auth2 = gapi.auth2.init({
    //     client_id: '884337409975-k6iktt00iqu8577hu3cl3egr21b8a52n.apps.googleusercontent.com',
    //     fetch_basic_profile: false,
    //     scope: 'profile'
    //   });

    //   // Sign the user in, and then retrieve their ID.
    //   this.auth2.signIn().then(function() {
    //     console.log(this.auth2.currentUser.get().getId());
    //   });
    // });


  }

  // @ViewChild('login') public login : ElementRef;

  onSignIn(googleUser) {
    // // Useful data for your client-side scripts:
    // var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);

    console.log(googleUser);



  };




}
