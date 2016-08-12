import {Component, Input} from '@angular/core';

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
  
}
