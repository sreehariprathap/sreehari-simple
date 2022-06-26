import { Component, OnInit } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  
  constructor() {}

  ngOnInit(): void {}
}
