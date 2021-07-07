import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatExpansionModule} from '@angular/material/expansion';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { DemoMaterialModule } from '../app/material-module';

import { FormsModule } from '@angular/forms'; 


@NgModule({
    // schemas: [
    //     CUSTOM_ELEMENTS_SCHEMA
    //   ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatExpansionModule,
        CarouselModule,
        FlexLayoutModule,
        DemoMaterialModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
})
export class AppModule {

}
