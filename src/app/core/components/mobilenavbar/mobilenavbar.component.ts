import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFeather,
  faBriefcase,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-mobilenavbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './mobilenavbar.component.html',
  styleUrls: ['./mobilenavbar.component.scss'],
})
export class MobilenavbarComponent implements OnInit {
  faFeather = faFeather;
  faBriefcase = faBriefcase;
  faSmile = faSmile;
  constructor() {}

  ngOnInit(): void {}
}
