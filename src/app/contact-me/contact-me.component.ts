import { Component, OnInit } from '@angular/core';
import {
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  envelope = faEnvelope
  phone = faPhone

  constructor() { }

  ngOnInit(): void {
  }

}
