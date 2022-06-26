import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModulesRoutingModule } from './modules-routing.module';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";

import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';
import {MatListModule} from "@angular/material/list";
import { PortfolioSingleProjectComponent } from './portfolio/portfolio-single-project/portfolio-single-project.component';


@NgModule({
  declarations: [
      HomeComponent,
      QuoteComponent,
      PortfolioCardComponent,
      BlogComponent,
      PortfolioComponent,
      SinglePostComponent,
      PortfolioSingleProjectComponent,
  ],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        CoreModule,
        ReactiveFormsModule,

        //Material
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatSnackBarModule,
        MatIconModule,
        MatSidenavModule,

        //Components
        SharedModule,
        MatListModule,
    ]
})
export class ModulesModule { }
