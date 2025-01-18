import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatComponent } from '../../chat/chat.component';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss']
})
export class ChatButtonComponent {

  constructor(public dialog: MatDialog) {}

  openChat() {
    const dialogRef = this.dialog.open(ChatComponent, {
      width: '512px',
      data: {} 
    });
  }
}
