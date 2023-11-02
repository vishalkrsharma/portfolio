import Project from '../models/Project';

export const PROJECTS = [
  new Project(
    'Moonquake Visualized',
    'It is a group project for the Nasa SpaceApps Challenge 2022 hackathon. In this project, we made a 3D simulation of the Moon and rendered the all the quakes recorded by the Apollo Lander.',
    'https://moonquake-visualized.vercel.app/',
    ['https://github.com/vishalkrsharma/moonquake-visualized'],
    ['NextJs', 'CSS Modules', 'Jest'],
    true
  ),
  new Project(
    'TaskMate',
    'It is a task management web app which can be used to manage tasks.',
    'https://tm-client-black.vercel.app/',
    ['https://github.com/vishalkrsharma/tm-client', 'https://github.com/vishalkrsharma/tm-server'],
    ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'],
    true
  ),
  new Project(
    'Ecommerce Website (Front)',
    'Part of Ecommerce Website from where customers can buy products.',
    'https://ecommerce-front-mu-inky.vercel.app',
    ['https://github.com/vishalkrsharma/ecommerce-front'],
    ['NextJs', 'styled-components'],
    true
  ),
  new Project(
    'Ecommerce Website (Admin)',
    'Part of Ecommerce Website from where admins can add products.',
    'https://ecommerce-admin-nu.vercel.app/',
    ['https://github.com/vishalkrsharma/ecommerce-admin'],
    ['NextJs', 'TailwindCSS'],
    true
  ),
  new Project(
    'Portfolio Website',
    'It is a simple portfolio website.',
    'https://vishalkrsharma.vercel.app/',
    ['https://github.com/vishalkrsharma/portfolio'],
    ['NextJs', 'CSS Modules', 'TypeScript', 'Jest'],
    true
  ),
  new Project(
    'NetflixGPT',
    'Movie streaming platform + Movie Recommendation',
    'https://netflix-gpt-d5cf6.web.app',
    ['https://github.com/vishalkrsharma/netflix-gpt'],
    ['ReactJs', 'TailwindCSS', 'Firebase'],
    true
  ),
  new Project(
    'Rick Roll Player',
    'This project is a RICK ROLL player.',
    'https://rick-roll-player.vercel.app/',
    ['https://github.com/vishalkrsharma/rick-roll-player'],
    ['HTML', 'CSS', 'Javascript'],
    false
  ),
  new Project(
    'Guess The Number',
    'This is a simple game in which the player need to guess a number (Between 1 and 20). Press the button Again! to play again.',
    'https://vishalkrsharma.github.io/guess-the-number/',
    ['https://github.com/vishalkrsharma/guess-the-number'],
    ['HTML', 'CSS', 'Javascript'],
    false
  ),
  new Project(
    'Calendar',
    'A Simple Calendar built using HTML, CSS and Javascript.',
    'https://github.com/vishalkrsharma/calendar',
    ['https://vishalkrsharma.github.io/calendar/'],
    ['HTML', 'CSS', 'Javascript'],
    false
  ),
];
