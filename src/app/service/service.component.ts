import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public firestore: AngularFirestore,public storage:AngularFireStorage) { }

  ngOnInit(): void {
    
    const orderForm = <HTMLFormElement>document.querySelector('#orderform');
    const query_msg = this.firestore.collection('order');
    orderForm.addEventListener('submit',(e) => { 
      e.preventDefault();

      const name = <HTMLInputElement>document.querySelector('#name');
      const userName = name.value;
      console.log(userName);
      const age = <HTMLInputElement>document.querySelector('#age');
      const userAge= age.value;
      console.log(userAge);
      const mobile = <HTMLInputElement>document.querySelector('#mobileno');
      const usermobile = mobile.value;
      console.log(usermobile);
      const date = <HTMLInputElement>document.querySelector('#date1');
      const userDate = date.value;
      console.log(userDate);
      const mail = <HTMLInputElement>document.querySelector('#email');
      const usermail = mail.value;
      console.log(usermail);
      const order = <HTMLInputElement>document.querySelector('#order');
      const userOrder = order.value;
      console.log(userOrder);

      query_msg.add({
        userName: userName,
        userAge: userAge,
        usermobile: usermobile,
        userDate : userDate,
        userOrder : userOrder,
      })
      orderForm.reset();
    })
  }
  

}
