import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFeather,faBriefcase,faSmile } from '@fortawesome/free-solid-svg-icons';
import { faCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faFeather = faFeather;
  faBriefcase = faBriefcase;
  faSmile = faSmile;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
