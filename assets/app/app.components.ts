// keep the app component as light as possible

// import components
import {Component} from '@angular/core';
// import in message obj contrusctor
import {Message} from './messages/message';
import {MessageListComponent} from './messages/message-list.component';
import {MessageInputComponent} from './messages/message-input.component';
import {MessageService} from "./messages/message.service";

// moduleId connects app parts
// component is loaded into views/index.hbs
@Component({
    moduleId: module.id,
    selector:'my-app',
    templateUrl: 'app.component.html',
    directives: [MessageListComponent, MessageInputComponent]
})

export class AppComponent {
  // message = {
  //   content: 'A message',
  //   author: 'Max'
  // };
}
// databinding to components
