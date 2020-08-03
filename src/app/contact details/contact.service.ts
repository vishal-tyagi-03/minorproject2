import { Contact } from "./contact";

export class ContactService{
    contacts: Contact[];
    constructor(){
        this.contacts = [];

        var contact1 = new Contact("Vishal", "2112-22121-4364");
        this.contacts.push(contact1);
    }   

    getContacts():Contact[]{
        return this.contacts;
    }

    addContact(contact : Contact){
        this.contacts.push(contact);
    }
}