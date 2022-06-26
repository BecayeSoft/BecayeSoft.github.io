import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { Tags } from 'src/app/core/models/tags';

import {Category} from '../../core/models/category';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    avatar: string = 'https://scontent.frba4-1.fna.fbcdn.net/v/t1.6435-9/139049991_4923080744429164_5557414686745973267_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE1aDmzVKI7UdoLsurvagCSZwICB1klS7FnAgIHWSVLsVndei41L5fwjdL1NAr6erEJrgS7dBIVqqYugM7V442C&_nc_ohc=gr88EsCOXgMAX8H_UpZ&_nc_ht=scontent.frba4-1.fna&oh=00_AT_H2gyRLy_Kht3QP7azXsw3-cqoK2VNYtoGh50Rw4ivqw&oe=62929C2F';

    posts: Post[] = [
        new Post('1',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            [Tags.WebDevelopment],
            new Category('1', 'Software Development'),
            [new Comment()]
        ),
        new Post('2',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            [Tags.WebDevelopment],
            new Category('1', 'Software Development'),
            [new Comment()]
        ),
        new Post('3',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            [Tags.WebDevelopment],
            new Category('2', 'Software Development'),
            [new Comment()]
        ),
        new Post('4',
            'Why is the Tesla Cybertruck designed the way it is?',
            'An exploration into the truck\'s polarising design proposed by Becaye the first hybrid son of Michaelson',
            'Content',
            'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg',
            [Tags.WebDevelopment],
            new Category('2', 'Data Science'),
            [new Comment()]
        ),
    ]

    postsByCategory: Post[] = [];

    categories: string[] = ['Software Development', 'Data Science', 'Self Growth']
    selectedCategory: string = this.categories[0];
    onCategoryChanged: Subject<string> = new Subject();

    nloop = [1, 2, 3, 4, 5];
    constructor() { }

    ngOnInit(): void {
        this.onCategoryChanged.subscribe(
            category => {
                console.log("CategorySubject", );
                
                this.postsByCategory = this.posts.filter(post => post.category.title == category);
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
}
