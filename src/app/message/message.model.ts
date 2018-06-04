import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';

/**
 * Message represents one message being sent in a Thread
 * Each message has:
  * id - the id of the message
  * sentAt - when the message was sent
  * isRead - a boolean indicating that the message was read
  * author - the User who wrote this message
  * text - the text of the message
  * thread - a reference to the containing Thread
 */
export interface Message {
  id?: string;
  sentAt?: Date;
  isRead?: boolean;
  thread?: Thread;
  author: User;
  text: string;
}
