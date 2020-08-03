import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact details/contact.service';
import { Contact } from '../contact details/contact';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactsSer : ContactService) {
    this.contacts = contactsSer.getContacts();
   }

  ngOnInit(): void {
  }

}
