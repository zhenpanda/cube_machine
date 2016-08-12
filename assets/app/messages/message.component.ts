import {Component, Input, Output, EventEmitter} from '@angular/core';

// import ts file
import {Message} from './message';

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

  //onClick event method
  onClick() {
    // emit the event
    this.editClicked.emit('changed');
  }

}
