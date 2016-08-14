import {Component} from '@angular/core';
import {Message} from './message';
import {MessageService} from "./message.service";

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'message-input.component.html'
  // inject the messageService into MessageInputComponent by providers
  //providers: [MessageService]
})

export class MessageInputComponent {

  // create instance of messageService
  constructor(private _messageService: MessageService) {}

  onCreate(content: string) {
    const message: Message = new Message(content, null, 'Dummy');
    //console.log(message);

    //calling the instanted obj's method
    this._messageService.addMessage(message);
  }



}
