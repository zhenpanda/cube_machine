import {Component} from '@angular/core';
// import components
import {MessageComponent} from './messages/message.component';
// import in message obj contrusctor
import {Message} from './messages/message';

// moduleId connects app parts
// component is loaded into views/index.hbs
@Component({
    moduleId: module.id,
    selector:'my-app',
    templateUrl: 'app.component.html',
    directives: [MessageComponent]
})
export class AppComponent {
  // message = {
  //   content: 'A message',
  //   author: 'Max'
  // };
  message: Message = new Message('A new message', null, 'Max');
}
// databinding to components
