import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './myComponents/contact-list/contact-list.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { ContactFormComponent } from './myComponents/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contactform', component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
