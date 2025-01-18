import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostComment } from 'src/app/core/models/post-comment';
import { User } from 'src/app/core/models/user';
import { AVATAR } from 'src/global';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

    avatar = AVATAR
    BLOG_URL = 'https://becaye.com/blog/'
    post_url = ''
    share_urls = { facebook: '', twitter: '', linkedin: '' }

    comments: PostComment[] = [
        new PostComment('1',
            new User('1', 'Abass', 'https://picsum.photos/200'),
            new Date(),
            "I love Becaye's blog! The quality of the articles show how much effort was put in it. Keep rocking, man!"),
        new PostComment('2',
            new User('2', 'Ibrahima', 'https://picsum.photos/200'),
            new Date(),
            "The next gen software!"),
        new PostComment('3',
            new User('1', 'Djenabou', 'https://picsum.photos/200'),
            new Date(),
            "Hi Becaye! Looking forward to collaborate with you on a project soon.")
    ]

    // logged in user
    user: User = new User('1', 'Abass', this.avatar)

    // post
    post!: Post

    constructor( private postService: PostService,
        private activatedRoute: ActivatedRoute,
        private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        
        // get post
        const id = this.activatedRoute.snapshot.params['id']

        this.postService.getPostById(id).subscribe(post => {
            this.post = post as Post
        })
        
        
        // social media share link
        this.post_url = this.BLOG_URL + id  // becayeblog/id

        this.share_urls.linkedin = 'https://www.linkedin.com/shareArticle?'
        + 'url=' + this.post_url
        + '&title=Becaye\'s Blog'
        + '&summary= POST TITLE HERE'
        + 'source=Becaye'
        this.share_urls.facebook = `https://www.facebook.com/sharer.php?u=${this.post_url}`
        this.share_urls.twitter = `https://twitter.com/intent/tweet?url=${this.post_url}`


        //-------------------
        // get user auth
        this.user.avatar = 'https://picsum.photos/200'

    }

    /**
       * Copy post link to clipboard
       */
    copyLink() {
        navigator.clipboard.writeText(this.post_url)
        this._snackBar.open('Link copied', '', {
            duration: 1500,
            panelClass: ['bg-rose-900', 'text-white'],
        });
    }

}
