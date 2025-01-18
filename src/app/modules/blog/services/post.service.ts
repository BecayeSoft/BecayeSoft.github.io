import { Injectable } from '@angular/core';
import { Post } from 'src/app/core/models/post';

import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore/'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	// posts = this.firestore.collection('posts').valueChanges({ idField: 'id' }) as Observable<Task[]>;
	// comments = this.firestore.collection('comments').valueChanges({ idField: 'id' }) as Observable<Task[]>;
	// users = this.store.collection('users').valueChanges({ idField: 'id' }) as Observable<Task[]>;


	postsCollection: AngularFirestoreCollection<Post>;
	// collection = '/posts'
	posts: Post[] = []

	//Upload a file
	// fileRef!: AngularFireStorageReference

	constructor(private firestore: AngularFirestore) {

		// posts = firestore.collection(this.collection).valueChanges();
		// this.postsRef = this.firestore.collection(this.collection)

		this.postsCollection = firestore.collection<Post>('posts')
	}

	/**
	 * Returns posts list data as an Observable
	 */
	getPosts() {
		// return this.postsCollection.valueChanges({ idField: 'doc_id' })
		return this.postsCollection.valueChanges()
	}

	/**
	 * Returns a single post as an Observable
	 * @param key
	 */
	getPostById(id: string) {
		return this.postsCollection.doc(id).valueChanges()
	}

	/**
	 * Add a new post to the firestore
	 * @param post 
	 */
	addPost(post: Post): Promise<DocumentReference<Post>> {
		// we parse to avoid firestore error
		// https://github.com/vuejs/vuefire/issues/670
		let my_post = JSON.parse(JSON.stringify(post))
		return this.postsCollection.add(my_post)
		
	}

	/**
	 * Updates a post in the firestore
	 * This method gets the doc from the posts collection then updates it
	 * @param post 
	 */
	updatePost(id: string, data: Post): Promise<void> {
		return this.postsCollection.doc(id).update(data)
	}

	/**
	 * Updates a post in the firestore
	 * @param post 
	 * @param key 
	 */


	/**
	 * Removes a post from the firestore
	 * If the post is associated with a photo, removePost() removes the photo
	 * then removes the post from the firestore.
	 */
	removePost(id: string): Promise<void> {
		// if (post.photo && post.photo !== '') 
		//   this.storage.refFromURL(post.photo).delete()
		
		return this.postsCollection.doc(id).delete();
	}

	/**
	 * Deletes all posts in the firestore database (Not recommended!)
	 */
	removeAllPosts() {
		console.error('It is not recommended to remove all your posts at once.')
	}


	/**
	 * Get Post Category
	 */
	getPostByCategory() {

	}



	/**
	 Uploads a photo, and return the AngularFireUploadTask.
	 This method gets the first file contained in the parameter,
	 then upload it to the directory 'images' with an almost unique name.
	*/
	uploadFile(event: any) {
		// const file = event.target.files[0]
		// const directory = 'images/'
		// const almostUniqueFileName = Date.now().toString() + '_' + file.name

		// this.fileRef = this.storage.ref(directory + almostUniqueFileName)
		// return this.storage.upload(directory + almostUniqueFileName, file)
	}

}
