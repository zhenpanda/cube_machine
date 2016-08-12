// data object
export class Message {
  // define type
  content: string;
  username: string;
  messageId: string;
  userId: string;

  // constructor obj
  constructor (content: string, messageId?:string, username?: string, userId?: string) {
    this.content = content;
    this.messageId = messageId;
    this.username = username;
    this.userId = userId;
  }
}
