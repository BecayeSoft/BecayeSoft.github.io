/**
 * @description: Service to save the chat history or perform CRUD operations on the chat databse.
 */

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatCollection!: AngularFirestoreCollection<any>;
  collection = '/chats'
  chats: any[] = []


  constructor(private firestore: AngularFirestore) {
    this.chatCollection = this.firestore.collection<any>(this.collection)

    // this.getAllChats().subscribe(chats => {
    //   chats.forEach(chat => {
    //     this.chats.push(chat)
    //   })

    //   console.log('chatService.chats', this.chats)
    // })

  }

  /**
   * Returns chat list data as an Observable
   */
  getAllChats() {
    // return this.chatCollection.valueChanges({ idField: 'doc_id' })
    return this.chatCollection.valueChanges()
  }

  /**
   * Returns a single chat as an Observable
   * @param key
   */
  // getChat(id: string) {
  //   return this.chatCollection.doc(id).valueChanges()
  // }

  
  /**
   * Add a new chat to the firestore
   * @param chat 
   */
  addChat(chat: any): Promise<DocumentReference<any>> {
    return this.chatCollection.add(chat)
  }

  /**
   * Updates a chat in the firestore
   * This method gets the doc from the chat collection then updates it
   * @param chat 
   */
  // updateChat(id: string, data: any): Promise<void> {
  //   return this.chatCollection.doc(id).update(data)
  // }

  /**
   * Removes a chat from the firestore
   */
  // removeChat(id: string): Promise<void> {
  //   return this.chatCollection.doc(id).delete();
  // }

  /**
   * Deletes all chats in the firestore database (Not recommended!)
   */
  // removeAllChats() {
  //   console.error('It is not recommended to remove all your chats at once.')
  // }

}
