import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SinglePostComponent } from './blog/posts/single-post/single-post.component';
import {MatListModule} from "@angular/material/list";
import { PortfolioSingleProjectComponent } from './portfolio/portfolio-single-project/portfolio-single-project.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NewPostComponent } from './blog/posts/new-post/new-post.component';
import { EditPostComponent } from './blog/posts/edit-post/edit-post.component';
import { AirPollutionComponent } from './portfolio/projects/air-pollution/air-pollution.component';
import { WebDevelopmentComponent } from './portfolio/web-development/web-development.component';
import { DataScienceComponent } from './portfolio/data-science/data-science.component';
import { ChatComponent } from './portfolio/chat/chat.component';
import { ChatButtonComponent } from './portfolio/chat/chat-button/chat-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      HomeComponent,
      QuoteComponent,
      PortfolioCardComponent,
      BlogComponent,
      PortfolioComponent,
      SinglePostComponent,
      PortfolioSingleProjectComponent,
      NewPostComponent,
      EditPostComponent,
      AirPollutionComponent,
      WebDevelopmentComponent,
      DataScienceComponent,
      ChatComponent,
      ChatButtonComponent,
  ],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Firebase
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,

        //Material
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatSnackBarModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,

        //Components
        SharedModule,
        MatListModule,
    ]
})
export class ModulesModule { }
