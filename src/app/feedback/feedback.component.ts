import { Component, OnInit } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public firestore: AngularFirestore,public storage:AngularFireStorage) {
    
   }

  ngOnInit(): void {

    


    const feedBackForm = <HTMLFormElement>document.querySelector('#feedbackForm');
    const feedbackdata = this.firestore.collection('feedback');

    //const btn = document.querySelector('#btn')


    function fns(){
      var r5 = <HTMLInputElement>document.querySelector('#star5');
      var r4 = <HTMLInputElement>document.querySelector('#star4');
      var r3 = <HTMLInputElement>document.querySelector('#star3');
      var r2 = <HTMLInputElement>document.querySelector('#star2');
      var r1 = <HTMLInputElement>document.querySelector('#star1');



      if(r1.checked){
        return r1.value
      }
      else if(r2.checked){
        return r2.value;
      }
      else if(r3.checked){
        return r3.value;
      }
      else if(r4.checked){
        return r4.value;
      }
      else if(r5.checked){
        return r5.value;
      }
      else{
        return 0;
      }
    }


    function fns2(){
      var r5 = <HTMLInputElement>document.querySelector('#star10');
      var r4 = <HTMLInputElement>document.querySelector('#star9');
      var r3 = <HTMLInputElement>document.querySelector('#star8');
      var r2 = <HTMLInputElement>document.querySelector('#star7');
      var r1 = <HTMLInputElement>document.querySelector('#star6');


      
      if(r1.checked){
        return r1.value
      }
      else if(r2.checked){
        return r2.value;
      }
      else if(r3.checked){
        return r3.value;
      }
      else if(r4.checked){
        return r4.value;
      }
      else if(r5.checked){
        return r5.value;
      }
      else{
        return 0;
      }
    }

    function fns3(){
      var r1 = <HTMLInputElement>document.querySelector('#f1');
      var r2 = <HTMLInputElement>document.querySelector('#f2');
      var r3 = <HTMLInputElement>document.querySelector('#f3');
      var r4 = <HTMLInputElement>document.querySelector('#f4');
      var r5 = <HTMLInputElement>document.querySelector('#f5');
      var r6 = <HTMLInputElement>document.querySelector('#f6');
      var r7 = <HTMLInputElement>document.querySelector('#f7');
      var r8 = <HTMLInputElement>document.querySelector('#f8');
      var r9 = <HTMLInputElement>document.querySelector('#f9');
      var r10 = <HTMLInputElement>document.querySelector('#f10');


      
      if(r1.checked){
        return 1;
      }
      else if(r2.checked){
        return 2;
      }
      else if(r3.checked){
        return 3;
      }
      else if(r4.checked){
        return 4;
      }
      else if(r5.checked){
        return 5;
      }
      else if(r6.checked){
        return 6;
      }
      else if(r7.checked){
        return 7;
      }
      else if(r8.checked){
        return 8;
      }
      else if(r9.checked){
        return 9;
      }
      else if(r10.checked){
        return 10;
      }
      else{
        return 0;
      }
    }
    
    
    feedBackForm.addEventListener('submit',(e) => {
      e.preventDefault();
      const name = <HTMLInputElement>document.querySelector('#name');
      const userName = name.value;
      //console.log(userName);

      let expRating = fns();
      //console.log(expRating);

      let frdRating = fns2();
      let foodRating = fns3();
      

      //Star Ratings 1
      
     //var r1 = <HTMLInputElement>document.querySelector('#star5');

    /*  if(r1.checked){ 
        console.log(r1.value);
        const r1_1 = r1.value
      }*/
      
      /*
      var r1 = <HTMLInputElement>document.querySelector('#star4');
      var r1 = <HTMLInputElement>document.querySelector('#star3');
      var r1 = <HTMLInputElement>document.querySelector('#star2');
      var r1 = <HTMLInputElement>document.querySelector('#star1');*/
      //const userRating1 = expRating;
     // console.log(userRating1)

      //Star Rating 2
      /*
      var r2 = <HTMLInputElement>document.querySelector('#star10');
      var r2 = <HTMLInputElement>document.querySelector('#star9');
      var r2 = <HTMLInputElement>document.querySelector('#star8');
      var r2 = <HTMLInputElement>document.querySelector('#star7');
      var r2 = <HTMLInputElement>document.querySelector('#star6');
      const userRating2 = r2.value;
      console.log(userRating2) */

      //Food Rating





      const suggessions = <HTMLInputElement>document.querySelector('#Aos');
      const usersuggessions = suggessions.value;
      //console.log(usersuggessions);
      feedbackdata.add({
        userName: userName, // 1.
        userRating1 : expRating,//2.user rating of 2nd
        userRating2 : frdRating,
        foodRating : foodRating,
        userSuggessions : usersuggessions // 5.
      })
      feedBackForm.reset()
    })
  }

}
