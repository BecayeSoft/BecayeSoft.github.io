import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { OpenaiService } from '../services/openai.service'
import { ChatService } from '../services/chat.service'


@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	messageText: string = ''
	isBotTyping: boolean = false
	isWaiting1: boolean = false
	isWaiting2: boolean = false
	hasSentMessage: boolean = false
	messages = [
		{
			text: "Hey there! I'm Marina. How can I help you? 🙂",
			sender: 'bot',
		},
	]
	chatHistory = ""


	constructor(
		private dialogRef: MatDialogRef<ChatComponent>,
		private openaiService: OpenaiService,
		private chatService: ChatService,
	) {
		this.dialogRef.afterClosed().subscribe(_ => {
			// Save the history if the human has sent at least 1 message (>= 2)
			if (this.messages.length >= 2)
				this.saveChat(this.chatHistory)
		})
	}

	ngOnInit(): void {}


	sendMessage() {
		const userMessage = this.messageText

		if (userMessage) {
			// Add the user message to the messages array
			this.messages.push({ text: userMessage, sender: 'human' })

			// To clean the description of the chatbot
			this.hasSentMessage = true

			// Set the typing indicator to true
			this.isBotTyping = true

			// this.conversation_history = ""
			this.chatHistory += "Human: " + userMessage + "\n"

			// If response takes too long display waiting message 1, then 2
			let timeout1 = setTimeout(() => {
				this.isWaiting1 = true
			}, 9000)
			
			let timeout2 = setTimeout(() => {
				this.isWaiting1 = false
				this.isWaiting2 = true
			}, 13000)

			let timeout3 = setTimeout(() => {
				this.isWaiting2 = false
			}, 17000)

			// Generate the response to user message

			this.openaiService.generate_response(this.chatHistory).then((response: any) => {
				// Extract the message. If there is a "Bot:" prefix, remove it.
				let botResponse = response.choices[0].message.content
				botResponse = botResponse.replace("Bot: ", "")
				botResponse = botResponse.replace("Whale Marina: ", "")
				botResponse = botResponse.replace("Whale: ", "")
				botResponse = botResponse.replace("Marina: ", "")

				// Add the bot message to the messages array
				this.messages.push({ text: botResponse, sender: 'bot' })
				this.chatHistory += "Marina: " + botResponse + "\n"
				this.isBotTyping = false

				// CLear the waiting messages timeouts
				clearTimeout(timeout1)
				clearTimeout(timeout2)
				clearTimeout(timeout3)
				this.isWaiting1 = false
				this.isWaiting2 = false
			})

			// Clear the input field after sending the message.
			this.messageText = ''
		}
	}

	saveChat(chatHistory: any) {
		let chat = {
			chat: chatHistory
		}

		this.chatService.addChat(chat).then(() => {
			// console.log("Chat have been saved successfully")
			// console.log(chatHistory)
		}).catch((error) => {
			console.log('error', error)
		})
	}

	closeDialog(): void {
		this.dialogRef.close()
	}

}

