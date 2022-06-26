import { Component, OnInit } from '@angular/core';
import { PostComment } from 'src/app/core/models/post-comment';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

    comments: PostComment[] = [
        new PostComment('1',
            new User('1', 'Abass', 'https://video.frba4-1.fna.fbcdn.net/v/t39.30808-6/254029297_4678164995576507_7178407023521512118_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeGPbYFw8X5PgLLyGe0KGGC41808xxWFRlHXzTzHFYVGUVReSgP2R1df5pb4D6td0J2elKZ3v_kS5bJl60zswJLS&_nc_ohc=GGDiaPOSWg4AX_m9-I5&_nc_zt=23&_nc_ht=video.frba4-1.fna&oh=00_AT8l8k2t4dWeWTytdzv7eO4383f48IgFyWNqq3MNnT7W-g&oe=62881231'), 
            "I love Becaye's blog! The quality of the articles show how much effort was put in it. Keep rocking, man!"),
        new PostComment('2',
            new User('2', 'Ibrahima', 'https://video.frba4-1.fna.fbcdn.net/v/t1.6435-9/119490379_3198652236854603_7109568282094441025_n.jpg?stp=c0.79.720.720a_dst-jpg_s851x315&_nc_cat=110&ccb=1-6&_nc_sid=da31f3&_nc_eui2=AeGMMFeUqEO4d9gBsx7YkriQ46Ge1_b2U_fjoZ7X9vZT95T-4F1O8EUJK3vEwdQQwQ2MPTWqr_W3rSGMAleKPvl0&_nc_ohc=xppb5XNkxeAAX8PUVz_&_nc_ht=video.frba4-1.fna&oh=00_AT-RTDKuo2xtXie5W-rCs8vVCVf1tzYjP86vusvtDCV7lg&oe=62A950EB'), 
            "The next gen software!"),
        new PostComment('3',
            new User('1', 'Abass', 'https://video.frba4-1.fna.fbcdn.net/v/t39.30808-6/254029297_4678164995576507_7178407023521512118_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeGPbYFw8X5PgLLyGe0KGGC41808xxWFRlHXzTzHFYVGUVReSgP2R1df5pb4D6td0J2elKZ3v_kS5bJl60zswJLS&_nc_ohc=GGDiaPOSWg4AX_m9-I5&_nc_zt=23&_nc_ht=video.frba4-1.fna&oh=00_AT8l8k2t4dWeWTytdzv7eO4383f48IgFyWNqq3MNnT7W-g&oe=62881231'),
            "Hi Becaye! Looking forward to collaborate with you on a project soon.")
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
