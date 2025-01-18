import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { SinglePostComponent } from './blog/posts/single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from "./quote/quote.component";
import { PortfolioSingleProjectComponent } from "./portfolio/portfolio-single-project/portfolio-single-project.component";
import { NewPostComponent } from './blog/posts/new-post/new-post.component';
import { EditPostComponent } from './blog/posts/edit-post/edit-post.component';
import { AirPollutionComponent } from './portfolio/projects/air-pollution/air-pollution.component';

// ------------------
// TODO: Lazy loading
//

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'portfolio',
		component: PortfolioComponent,
	},
	{
		path: 'portfolio/project',
		component: PortfolioSingleProjectComponent,
	},
	{
		path: 'portfolio/air-pollution',
		component: AirPollutionComponent,
	},
	{
		path: 'blog',
		children: [
			{
				path: '',
				component: BlogComponent,
			},
			{
				path: 'posts',
				children: [
					{
						path: 'new',
						component: NewPostComponent
					},
					// order is important because every string would be considered id
					{
						path: ':id',
						component: SinglePostComponent
					},
					{
						path: 'edit/:id',
						component: EditPostComponent
					}
				]
			}

		]
	},
	{
		path: 'quote',
		component: QuoteComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ModulesRoutingModule { }
