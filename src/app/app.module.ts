import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DemoMaterialModule } from '../app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthService} from './auth.service'
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  // schemas: [
  //     CUSTOM_ELEMENTS_SCHEMA
  //   ],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TermsAndConditionsComponent,
    PrivacyAndPolicyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    CarouselModule,
    FlexLayoutModule,
    DemoMaterialModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

  ],
  providers: [AuthService,  DatePipe  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {

}
