import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.types';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss']
})
export class MessageBubbleComponent {
    @Input() public message!: Message;

    constructor() {

    }
}
