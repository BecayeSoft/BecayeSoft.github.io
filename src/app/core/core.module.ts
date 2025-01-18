import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './components/header/brand/brand.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        FooterComponent,
        BrandComponent,
        MenuComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,

        SharedModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [
        FooterComponent,
        BrandComponent,
        MenuComponent,
        HeaderComponent,
    ]
})
export class CoreModule { }
