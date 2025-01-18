import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categories } from 'src/app/core/models/categories';
import { Category } from 'src/app/core/models/category';
import { Post } from 'src/app/core/models/post';
import { AVATAR } from 'src/global';
import { Tags } from '../../../../core/models/tags';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';

declare var tinymce: any

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

	date = new Date()
	avatar = AVATAR
	isShowHelp = true
	isShowHelp2 = true
	isShowTemplate = true

	constructor(private postService: PostService,
		private catService: CategoryService,
		private _snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.catService.categories;
	}

	showEditorHelp() {
		let help = `
			<h1>Post title is the first h1 tag</h1>
			
			<h3>Image</h3>
			Insert from URL. Don't forget to add ALT (the image author name)
			
			<h3>Description:</h3>
			<blockquote>Inside a blockquote. Format > Blocks > Blockquote.</blockquote>
			
			<h3>Category</h3>
			<p>Category is defined inside "CATEGORY: :CATEGORY". 
			There are 4 categories: Data Science, Software Development, Self Growth, Other<br>
			</p>	
			<b>Example:</b>		
			CATEGORY: Software Development :CATEGORY<br>

			<h3>Tags</h3>
			<p>Tags are defined insde 'TAGS: :TAGS' and separated by a comma ','. 
			A compehensive list of tags is provided below. <br>
			<b>Example:</b>
			TAGS: A TAG, ANOTHER TAG. :TAGS<br>
			TAGS: Web Developement, Mobile Development, Artificial Intelligence,
			Machine Learning, Deep Learning, Data Science, Data Preprocessing,
			Data Visualisation, Project, Self Growth
		`



		tinymce.get("tiny-edit-post-metadata").setContent(help)

		this.isShowHelp = false
	}

	hideEditorHelp() {
		tinymce.get("tiny-edit-post-metadata").setContent('')
		this.isShowHelp = true
	}
	
	showTemplate() {
		let template = `
			<h1>Title</h1>
			INSERT IMAGE HERE - Insert > Image: Set Image URL and ALT (the author name)
			<blockquote>Description</blockquote>
			CATEGORY: Data Science :CATEGORY<br>
			TAGS: Web Developement, Mobile Development, Artificial Intelligence,
			Machine Learning, Deep Learning, Data Science, Data Preprocessing,
			Data Visualisation, Data Storytelling, Project, Self Growth :TAGS
		`
		tinymce.get("tiny-edit-post-metadata").setContent(template)
		
		this.isShowTemplate = false
	}
	
	hideTemplate() {
		tinymce.get("tiny-edit-post-metadata").setContent('')
		this.isShowTemplate = true
	}

	showEditor2Help() {
		let help = `
			Write the content of the post here without the metadata
			such as title, descripton or post image.
			You can still add content images.
		`
		tinymce.get("tiny-edit-post-content").setContent(help)

		this.isShowHelp2 = false
	}

	
	hideEditor2Help() {
		tinymce.get("tiny-edit-post-content").setContent('')
		this.isShowHelp2 = true
	}

	/**
	 * Saves the post in the firestore database.
	 * 
	 * The metadata editor allows me to add a title, a desription and a post image.
	 * The content editor allows me to add the body of the post.
	 * The post will be displayed as written in the editor: WYSIWYG.
	 */
	onSave() {
		let isError = false

		// POST METADATA
		let post_metadata = tinymce.get("tiny-edit-post-metadata").getContent();

		let title = post_metadata.match("<h1>(.*?)</h1>");
		let description = post_metadata.match("<blockquote>(.*?)</blockquote>");
		let image = post_metadata.match('<img src="(.*?)">');
		let image_author = post_metadata.match('alt="(.*?)"');
		let category = post_metadata.match('CATEGORY:(.*?):CATEGORY');
		let tags = post_metadata.match('TAGS:(.*?):TAGS');

		console.log(post_metadata);
		
		if (title && title.length >= 2) title = title[1]
		else {
			isError = true
			this.displayErrorSnackbar('title')
		} 
		
		if (description && description.length >= 2) description = description[1]
		else {
			isError = true
			this.displayErrorSnackbar('description')
		}  
		
		if (image && image.length >= 2) image = image[1]
		else {
			isError = true
			this.displayErrorSnackbar('image')
		} 
		
		if (image_author && image_author.length >= 2) image_author = image_author[1]
		else {
			isError = true
			this.displayErrorSnackbar('image alt')
		}

		if (category && category.length >= 2){
			// remove spaces. Ex:'Data Science ' => 'DataScience'
			category = category[1].split(' ').join('')
			// Get the category value. Ex: Categories.DataScience
			category = Categories[category as keyof typeof Categories]

			console.log('category', category);
		}
		else {
			isError = true
			this.displayErrorSnackbar('category')
		}  

		if (tags && tags.length >= 2) {
			tags = tags[1].split(',')
			
			for (let i = 0; i < tags.length; i++) {
				tags[i] =  tags[i].split(' ').join('') as Tags;	
			}
			
			console.log('tags', tags);
		}
		else {
			isError = true
			this.displayErrorSnackbar('tags')
		}  


		// POST CONTENT
		let post_content = tinymce.get("tiny-edit-post-content").getContent();
		
		if (post_content) console.log()
		else this.displayErrorSnackbar('post content')

		// if (!isError) {
		if (true) {
			let id_category = this.catService.getCategoryIDByTitle(category)
			
			let id = ''
			let newPost = new Post(id, title, description, post_content,
				image, image_author, id_category as string, tags)
			
			this.postService.addPost(newPost)

			// TODO
			console.log('newPost', newPost);
			
			
		}
	}
	

	/**
	onSave() {
		let editor_content = tinymce.activeEditor.getContent();

		// title: the h1 heading
		// let title = editor_content.match("<h1>(.*?)</h1>");
		// console.log('title', title[1])

		// image: the first image
		// let image = editor_content.match("<img>(.*?)</img>");
		// console.log(image[1])

		// description: the first paragraph
		// let description = editor_content.match("<p>(.*?)</p>");
		// console.log(description[1])

		// content: the post content
		// let content = editor_content.split('\n')

		// if (content[0] && content[0].startsWith('<h1>'))
		// 	content.shit();  // remove item 0
		
		// if (content[1] && content[1].startsWith('<img>'))
		// 	content.shift();  // remove item 1
		
		// if (content[2] && content[2].startsWith('<p>'))
		// 	content.shift();  // remove item 2


		// content.shift()
		// content.shift()
		// console.log('content', content)
		// console.log(editor_content)

		// let newPost = new Post()
		// this.postService.addPost(newPost)
	}
	**/

	displayErrorSnackbar(missing_element: string) {
		this._snackBar.open(`${missing_element} is missing: Please, consider adding ${missing_element}`, '', {
			duration: 3000,
			panelClass: ['bg-rose-900', 'text-white'],
			verticalPosition: 'top'
		});
	}
}
