import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    resultSets: any[] = [];
    searchControl: FormControl = new FormControl();

    posts: any = [
        {
            title: 'Title',
            description: 'Lorem ipusm dolor Becsim thi cum Lorem ipusm dolor Becsim thi cum'
                + ' Lorem ipusm dolor Becsim thi cum',
            content: 'content'
        },
        {
            title: 'My post',
            description: 'Lorem ipusm dolor Becsim thi cum Lorem ipusm dolor Becsim thi cum',
            content: 'My content'
        },
        {
            title: 'My Title',
            description: 'Lorem ipusm dolor Becsim thi cum',
            content: 'content'
        },
        {
            title: 'Post',
            description: 'Lorem ipusm dolor Becsim thi cum',
            content: 'My content'
        },
    ];

    constructor() { }

    ngOnInit(): void {
        let postsResults: any[] = [];
        let results: any[] = [];

        this.searchControl.valueChanges.subscribe((value: any) => {
            console.log("SearchControl", value);

            let searchInput = value as string;
            searchInput = searchInput.toLowerCase();

            console.log("Posts.filter=>");

            postsResults = this.posts.filter(
                (post: any) => post.title.toLowerCase().includes(searchInput)
            );

            console.log("Post results", postsResults);

            results.push({
                id: 'posts',
                label: 'posts',
                results: postsResults
            });

            //console.log("Results", results);
            this.resultSets = results;
            postsResults = [];
            results = [];

        });
    }


    /**
     * Track by function for ngFor loops
     * Update only the elements that have changed
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    onSelectBlog(post: any) {
        console.log("Blog selected!");
        console.log(post);
    }


}
