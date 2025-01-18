import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { EditPostComponent } from './modules/blog/posts/edit-post/edit-post.component';
import { NewPostComponent } from './modules/blog/posts/new-post/new-post.component';
import { SinglePostComponent } from './modules/blog/posts/single-post/single-post.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { ComingSoonComponent } from './shared/components/coming-soon/coming-soon.component';
import { FourOhFourComponent } from './shared/components/four-oh-four/four-oh-four.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: PortfolioComponent,
	},
	{
		path: 'shared/coming-soon',
		component: ComingSoonComponent,
	},
    {
        path: 'not-found',
        component: FourOhFourComponent 
    },
    // { 
    //     path: '**', 
    //     redirectTo: 'not-found' 
    // } 
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
