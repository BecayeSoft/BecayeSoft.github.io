import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Category } from 'src/app/core/models/category';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	categoriesCollection: AngularFirestoreCollection<Category>;
	collection = '/categories'
	categories: Category[] = []


	constructor(private firestore: AngularFirestore) {
		this.categoriesCollection = firestore.collection<Category>(this.collection)

		this.getcategories().subscribe(values => {
			values.forEach(v => {
				this.categories.push(v as Category)
			});

			console.log('CategoryService.categories', this.categories);

			this.getCategoryIDByTitle('Software Development')
		})



	}

	/**
	 * Returns categories list data as an Observable
	 */
	getcategories() {
		return this.categoriesCollection.valueChanges({ idField: 'doc_id' })
		// return this.categoriesCollection.valueChanges()
	}

	/**
	 * Returns a single category as an Observable
	 * @param key
	 */
	getCategoryById(id: string) {
		return this.categoriesCollection.doc(id).valueChanges()
	}

	/**
	   * Returns a single category as an Observable
	   * @param title
	   */
	getCategoryIDByTitle(title: string) {

		let cat = this.categories.find(c => c.title === title)
		console.log('my_cat', cat);

		if (cat)
			return cat.doc_id
		else {
			console.error('Unknown Category at CategoryService.getCategoryByTitle')
			return -1;
		}
	}

	/**
	 * Add a new category to the firestore
	 * @param category 
	 */
	addCategory(category: Category): Promise<DocumentReference<Category>> {
		return this.categoriesCollection.add(category)
	}

	/**
	 * Updates a category in the firestore
	 * This method gets the doc from the categories collection then updates it
	 * @param category 
	 */
	updateCategory(id: string, data: Category): Promise<void> {
		return this.categoriesCollection.doc(id).update(data)
	}

	/**
	 * Removes a category from the firestore
	 */
	removeCategory(id: string): Promise<void> {
		return this.categoriesCollection.doc(id).delete();
	}

	/**
	 * Deletes all categories in the firestore database (Not recommended!)
	 */
	removeAllCategories() {
		console.error('It is not recommended to remove all your categories at once.')
	}

}