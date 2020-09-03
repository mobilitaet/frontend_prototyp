import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'push-notification';
  message;
  constructor(private messagingService: MessagingService) { }
  
  ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
 }
}