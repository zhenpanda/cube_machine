import { Component, OnInit } from "@angular/core";
import {Message} from './message';
import {MessageComponent} from './message.component';
import { MessageService } from "./message.service";

@Component({
  selector: 'my-message-list',
  template: `
  <!-- onClick triggers the event and event emit triggers and input $event -->
  <!-- *ngFor loop -->
  <my-message *ngFor="let message of messages" [message]="message" (editClicked) = "message.content = $event"></my-message>
  `,
  // directives are instructions
  // structural directives add or delete part of DOM
  // attributes directives change value
  directives: [MessageComponent]
  //providers: [MessageService]
})

// angular 2 interface and executes some method
export class MessageListComponent implements OnInit {
  // array of objs

  // messages: Message[] = [
  //   new Message('A new message', null, 'Max'),
  //   new Message('Another message', null, 'Anna')
  // ];

  constructor(private _messageService: MessageService) {}

  messages: Message[];

  ngOnInit() {
      this.messages = this._messageService.getMessages();
  }
}
// databinding to components
