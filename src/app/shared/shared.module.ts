import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { PostCardComponent } from './components/post-card/post-card.component';
import { SearchComponent } from './components/search/search.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { InfoMessageComponent } from './components/info-message/info-message.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { LogoComponent } from './components/logo/logo.component';


// Material
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CopyrightsComponent } from './components/copyrights/copyrights.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
    declarations: [
        PostCardComponent,
        SearchComponent,
        UserCardComponent,
        ContactComponent,
        NewsLetterComponent,
        InfoMessageComponent,
        ComingSoonComponent,
        SnackbarComponent,
        FourOhFourComponent,
        LogoComponent,
        CopyrightsComponent,
        SocialMediaComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot([]),

        ReactiveFormsModule,

        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        PostCardComponent,
        SearchComponent,
        NewsLetterComponent,
        ContactComponent,
        InfoMessageComponent,
        SnackbarComponent,
        LogoComponent,
        CopyrightsComponent,
        SocialMediaComponent,
    ]
})
export class SharedModule { }
