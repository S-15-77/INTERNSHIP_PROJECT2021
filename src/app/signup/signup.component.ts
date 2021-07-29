import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth : AngularFireAuth) { 
    
  }

  ngOnInit(): void {
    

    const signupForm : any = <HTMLFontElement> document.querySelector('#signup-form');
    signupForm.addEventListener('submit' , (e : any) =>{
      e.preventDefault();
      //get user info
      const email : any =  signupForm['signup-email'].value;
      const password : any =  signupForm['signup-password'].value;

      //console.log(email,password)

      //signup the user
      this.auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        console.log(cred.user)
      })

    })
  }

}
