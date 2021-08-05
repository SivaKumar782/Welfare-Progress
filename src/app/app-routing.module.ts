import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-and-policy', component: PrivacyAndPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
