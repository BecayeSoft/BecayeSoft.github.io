import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Categories } from 'src/app/core/models/categories';
import { Post } from 'src/app/core/models/post';
import { Tags } from 'src/app/core/models/tags';

import {Category} from '../../core/models/category';
import { PostService } from './services/post.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    avatar: string = 'assets/images/avatar.jpg'

    posts: Post[] = [
        new Post('1',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            'Bobby Shwarz',
            'm0kRWzIzgcWkLZkQRoxf',
            [Tags.WebDevelopment]
        ),
        new Post('2',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            'Bobby Shwarz',
            'm0kRWzIzgcWkLZkQRoxf',
            [Tags.WebDevelopment]
        ),
        new Post('3',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            'Bobby Shwarz',
            '3eZOetjWG3tcBXRszi9',
            [Tags.WebDevelopment],
        ),
        new Post('4',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            'Bobby Shwarz',
            'pvbrYp41a3WxRsrNXw5g',
            [Tags.WebDevelopment],
        ),
    ]

    postsByCategory: Post[] = [];

    categories: string[] = ['Software Development', 'Data Science', 'Self Growth']
    selectedCategory: string = this.categories[0];
    onCategoryChanged: Subject<string> = new Subject();

    nloop = [1, 2, 3, 4, 5];
    
    constructor(private postService: PostService,
        private router: Router) { }

    ngOnInit(): void {
        // get all posts
        this.postService.getPosts().subscribe(post => {
            this.posts = post
        })


        this.onCategoryChanged.subscribe(
            category => {
                console.log("CategorySubject", );
                
                // TODO: category is now id_cat
                // this.postsByCategory = this.posts.filter(post => post.category.title == category);
                console.log("Posts", this.posts);
                console.log("PostsByCategory", this.postsByCategory);
                
            }
        )

        // Displays default category
        this.onSelectCategory(this.selectedCategory);
    }

    onSelectCategory(category: string): void {
        this.selectedCategory = category;
        this.onCategoryChanged.next(this.selectedCategory);
        console.log("Selected", this.selectedCategory);
    }

    onSelectPost(id: string) {
        this.router.navigate(['blog', 'posts', id])
    } 
}
