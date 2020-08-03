import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { ContactService } from './contact details/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
