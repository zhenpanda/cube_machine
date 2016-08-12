import {Component} from '@angular/core';
import {Message} from './message';
import {MessageService} from "./message.service";

@Component({
  selector: 'my-message-input',
  template: `
  <section class="col-md-8 col-md-offset-2">
    <div class="form-group">
      <label for="content">Content</label>
      <input type="text" class="form-control" id="content" #input>
      <button type="submit" class="btn btn-primary" (click)="onCreate(input.value)">Send Message</button>
    </div>
  </section>
  `
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
