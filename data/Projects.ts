import Project from '../models/Project';

const PROJECTS: Project[] = [
  {
    title: 'Moonquake Visualized',
    info: [
      'Created a 3D Moon simulation, visualizing Apollo Lander’s lunar quake data using NextJs.',
      'Developed an interactive web app animating seismic waves on the Moon based on user-provided dates.',
      'Displays animated pressure gradient waves at specific latitudes and longitudes.',
      'Showcases technology’s creative and impactful role in space exploration.',
      'NASA SpaceApps Challenge 2022 Global Winner (Global Impact Awards).',
    ],
    projectLink: [
      {
        link: 'https://moonquake-visualized.vercel.app/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/moonquake-visualized',
        label: 'Github',
      },
    ],
    techTags: ['NextJs', 'CSS Modules', 'Jest'],
    isFeatured: true,
  },
  {
    title: 'TaskMate',
    info: [
      'Developed a web app to create, edit and delete tasks.',
      'Profile management features like update username, email and password.',
      'JWT tokens are utilized for user authentication.',
      'Every Fields of a task is validated and stored in a database.',
    ],
    projectLink: [
      {
        link: 'https://tm-client-black.vercel.app/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/tm-client',
        label: 'Client',
      },
      {
        link: 'https://github.com/vishalkrsharma/tm-server',
        label: 'Server',
      },
    ],
    techTags: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'],
    isFeatured: true,
  },
  {
    title: 'Ecommerce Website',
    info: [
      'This project comprises two distinct applications: ecommerce-admin and ecommerce-store.',
      'ecommerce-admin includes a dashboard, enabling users to create stores, define categories, manage products, and execute administrative tasks.',
      'ecommerce-store allows users to efficiently add products to their cart and proceed to checkout.',
      'Secure payment processing is seamlessly handled through Stripe.',
    ],
    projectLink: [
      {
        link: 'https://ecommerce-store-six-murex.vercel.app',
        label: 'Store',
      },
      {
        link: 'https://ecommerce-admin-eosin-eight.vercel.app',
        label: 'Admin',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/ecommerce-store',
        label: 'Store',
      },
      {
        link: 'https://github.com/vishalkrsharma/ecommerce-admin',
        label: 'Admin',
      },
    ],
    techTags: ['NextJs', 'styled-components'],
    isFeatured: true,
  },

  {
    title: 'Portfolio Website',
    info: [
      'Developed a modern and responsive portfolio website showcasing my skills, projects, and professional journey.',
      'Implemented a desktop-first design approach for optimal viewing on various devices, ensuring a seamless user experience.',
      'Optimized the website for fast loading times, implementing best practices in code optimization and image compression.',
      'Conducted performance testing and made adjustments to ensure optimal website speed and responsiveness.',
    ],
    projectLink: [
      {
        link: 'https://vishalkrsharma.vercel.app/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/portfolio',
        label: 'Github',
      },
    ],
    techTags: ['NextJs', 'CSS Modules', 'TypeScript', 'Jest'],
    isFeatured: true,
  },
  {
    title: 'NetflixGPT',
    info: ['Movie streaming platform + Movie Recommendation'],
    projectLink: [
      {
        link: 'https://netflix-gpt-d5cf6.web.app',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/netflix-gpt',
        label: 'Github',
      },
    ],
    techTags: ['ReactJs', 'TailwindCSS', 'Firebase'],
    isFeatured: true,
  },
  {
    title: 'Rick Roll Player',
    info: ['This project is a RICK ROLL player.'],
    projectLink: [
      {
        link: 'https://rick-roll-player.vercel.app/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/rick-roll-player',
        label: 'Github',
      },
    ],
    techTags: ['HTML', 'CSS', 'Javascript'],
    isFeatured: false,
  },
  {
    title: 'Guess The Number',
    info: ['This is a simple game in which the player needs to guess a number (Between 1 and 20).', 'Press the button Again! to play again.'],
    projectLink: [
      {
        link: 'https://vishalkrsharma.github.io/guess-the-number/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/guess-the-number',
        label: 'Github',
      },
    ],
    techTags: ['HTML', 'CSS', 'Javascript'],
    isFeatured: false,
  },
  {
    title: 'Calendar',
    info: ['A Simple Calendar built using HTML, CSS, and Javascript.'],
    projectLink: [
      {
        link: 'https://vishalkrsharma.github.io/calendar/',
        label: 'Project',
      },
    ],
    githubLinks: [
      {
        link: 'https://github.com/vishalkrsharma/calendar',
        label: 'Github',
      },
    ],
    techTags: ['HTML', 'CSS', 'Javascript'],
    isFeatured: false,
  },
];

export default PROJECTS;
