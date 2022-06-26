import { Component, OnInit } from '@angular/core';
import { faCodeFork, faDisplay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  faCodeFork = faCodeFork;
  faDisplay = faDisplay;
  projects = [
    {
      name: 'Medium',
      technologies: ['Angular', 'sanity', 'typescript', 'tailwindcss'],
      github: 'https://github.com/sreehariprathap/hulu',
      live: '',
      imgSource: 'assets/projects/medium-clone.png',
      description:
        'medium app is used make blog posts and share them with the world. It is a clone of medium.com',
    },
    {
      name: 'Hulu',
      technologies: ['next.js', 'react', 'typescript', 'tailwindcss'],
      github: 'https://github.com/sreehariprathap/hulu',
      live: '',
      imgSource: 'assets/projects/hulu.png',
      description:
        'hulu is a clone of famous streaming app, uses tmdb api for fetching latest movies and displaying them',
    },
    {
      name: 'Facebook',
      technologies: ['next.js', 'react', 'typescript', 'tailwindcss'],
      github: 'https://github.com/sreehariprathap/facebook',
      live: '',
      imgSource: 'assets/projects/fb-clone.png',
      description:
        'facebook is a clone of famous social media app, can be used to make posts',
    },
    {
      name: 'Netflix',
      technologies: ['next.js', 'react', 'typescript'],
      github: '',
      live: '',
      imgSource: 'assets/projects/netflix.png',
      description:
        'netflix is a clone of famous streaming app, netflix clone contains login with firebase authentication',
    },
    {
      name: 'Care',
      technologies: ['Angular', 'asp.net', 'typescript', 'bootstrap'],
      github: 'https://github.com/sreehari4experion/careClinicManagementSystem',
      live: '',
      imgSource: 'assets/projects/care.png',
      description:
        'care is a clinic management system app with portals for receptionist, doctor, pharmacist, admin,lab technician.',
    },
    {
      name: 'pig game',
      technologies: ['HTML', 'CSS', 'javascript'],
      github: 'https://github.com/sreehariprathap/pig-game-DOM-learning',
      live: 'https://sreehariprathap.github.io/pig-game-DOM-learning',
      imgSource: 'assets/projects/piggame.png',
      description: 'A game developed as part of my learning',
    },
    {
      name: 'guess game',
      technologies: ['HTML', 'CSS', 'javascript'],
      github: 'https://github.com/sreehariprathap/Guess-game-retro',
      live: 'https://github.com/sreehariprathap/Guess-game-retro',
      imgSource: 'assets/projects/guessgame.png',
      description: 'A game developed as part of my learning',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
