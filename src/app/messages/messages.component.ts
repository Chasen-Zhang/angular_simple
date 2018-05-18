import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() emitmyUp = new EventEmitter();
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
  emitmy() {
    this.emitmyUp.emit({
      a: 10
    });
  }
}
