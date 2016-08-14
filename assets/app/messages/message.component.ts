import {Component, Input, Output, EventEmitter} from '@angular/core';

// import ts file
import {Message} from './message';
// import the MessageService
import {MessageService} from "./message.service";

@Component({
  moduleId: module.id,
  selector:'my-message',
  // need module Id to load component html
  templateUrl: 'message.component.html'
})

export class MessageComponent {
  // static
  // message:Message = new Message('The content', null, 'Max');

  // allow user input
  @Input() message: Message;
  // output event emitter
  @Output() editClicked = new EventEmitter<string>();
  color = "white";
  show = true;

  constructor (private _messageService: MessageService) {};

  //onClick event method
  // onClick() {
  //   // emit the event
  //   this.editClicked.emit('changed');
  // }

  onEdit() {
    this._messageService.editMessage(this.message);
  }

  onDelete() {
    this._messageService.deleteMessage(this.message);
  }

}
