// angular service can b injected
import { Message } from "./message";

export class MessageService {
    // MessageService will contain all the data shared by different components of the app
    messages: Message[] = [];

    //MessageService will contain all the method used on those data
    addMessage(message: Message) {
        this.messages.push(message);
    }

    getMessages() {
        return this.messages;
    }

    editMessage(message: Message) {
        this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'Dummy');
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}
