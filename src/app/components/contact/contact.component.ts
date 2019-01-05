import { Component, OnInit } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  phone: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the contact form we have and send to David
   * Only alerting for now
   */
  processForm() {
    const allInfo = `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nMessage: ${this.message}`;
    alert(allInfo);
  }
}
