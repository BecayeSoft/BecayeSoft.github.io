import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import {QuoteComponent} from "./quote/quote.component";
import {PortfolioSingleProjectComponent} from "./portfolio/portfolio-single-project/portfolio-single-project.component";

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
		path: 'blog',
		component: BlogComponent,
        // children: [
        //     {
        //         path: 'post',
        //         component: SinglePostComponent
        //     }
        // ]
	},
    {
		path: 'blog/post',
        component: SinglePostComponent
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
