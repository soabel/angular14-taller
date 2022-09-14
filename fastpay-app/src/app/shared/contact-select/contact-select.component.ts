import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-select',
  templateUrl: './contact-select.component.html',
  styleUrls: ['./contact-select.component.scss']
})
export class ContactSelectComponent implements OnInit {

  // selectContact
  @Output() public selectContactEvent = new EventEmitter<Contact>();


  contacts: Contact[] = [];
  selected?: Contact;
  constructor() { }

  ngOnInit(): void {
    this.contacts.push({ name: 'Alex Espejo', phone: '987654321' });
    this.contacts.push({ name: 'Carlos Ramos', phone: '123456789' });
  }

  select(contact: Contact) {
    this.selected = contact;
    this.selectContactEvent.emit(this.selected);
  }



}
