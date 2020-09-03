import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'

@Injectable()

export class MessagingService {
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
          console.log(token);
            let xhr = new XMLHttpRequest();
          
            xhr.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
              }
            };
            xhr.open("GET", "localhost:3000/admin", true);
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