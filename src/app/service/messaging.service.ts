import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MessagingService {

    public token: String = "undefined";

    currentMessage = new BehaviorSubject(null); constructor(private angularFireMessaging: AngularFireMessaging) {
      this.angularFireMessaging.messaging.subscribe(
        (_messaging) => {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        }
      )
    } 
    
    requestPermission() {
      this.angularFireMessaging.requestToken.subscribe(
        (token) => {
          this.token = token;
          console.log(token);
            let xhr = new XMLHttpRequest();
          
            xhr.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
              }
            };
            xhr.open("POST", "https://www.mobilitaetproto.tk/admin", true);
            xhr.send(JSON.stringify({
              "token": token
            }));
        },
        (err) => {
          console.error('Unable to get permission to notify.', err);
        }
      );
    } 
    
    receiveMessage() {
      this.angularFireMessaging.messages.subscribe(
        (payload) => {
          console.log("new message received. ", payload);
          this.currentMessage.next(payload);
        })
    }
}