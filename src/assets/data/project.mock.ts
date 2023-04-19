import { Project } from 'src/app/models/project.interface';

export const PROJECTS: Project[] = [
  {
    title: 'Devly CLI',
    tags: ['Rust'],
    description:
      'Devly is a Rust-based command-line interface (CLI) application designed to assist developers in their programming process.',
    longDescription:
      'This is a full-stack e-commerce web application built with React, Node.js, and MongoDB. It features a shopping cart, user authentication, and credit card payment processing using the Stripe API.',
    github: 'https://github.com/username/ecommerce-site',
    link: 'https://ecommerce-site.herokuapp.com',
    image: 'https://example.com/images/ecommerce-site.jpg',
  },
  {
    title: 'Portfolio',
    tags: ['Angular', 'Bootstrap', 'SpringBoot'],
    description:
      'A personal portfolio website showcasing my projects, skills, images and blog posts',
    longDescription:
      "This is a machine learning-based movie recommendation web application built with Python, Scikit-learn, and Flask. It uses collaborative filtering to recommend movies based on a user's ratings and preferences.",
    github: 'https://github.com/username/movie-recommendation-app',
    link: 'https://movie-recommendation-app.herokuapp.com',
    image: 'https://example.com/images/movie-recommendation-app.jpg',
  },
  {
    title: 'Todo CLI',
    tags: ['Rust'],
    description:
      'Efficient Rust-based CLI simple to-do list for task management',
    longDescription:
      'This is a social media web application built with React, Firebase, and Material UI. It features user authentication, real-time updates, and the ability to create, read, update, and delete posts.',
    github: 'https://github.com/username/social-media-app',
    link: 'https://social-media-app.firebaseapp.com',
    image: 'https://example.com/images/social-media-app.jpg',
  },
  {
    title: 'Portfolio (Old)',
    tags: ['Angular', 'Bootstrap', 'Typescript'],
    description:
      'A personal portfolio website showcasing my projects and skills',
    longDescription:
      'This is a personal portfolio website built with HTML, CSS, and JavaScript. It showcases my projects and skills, and includes a contact form for potential clients or employers to get in touch.',
    github: 'https://github.com/username/portfolio-website',
    link: 'https://my-portfolio-website.com',
    image: 'https://example.com/images/portfolio-website.jpg',
  },
  {
    title: 'Sticky Notes',
    tags: ['Angular', 'Local Storage', 'PWA'],
    description: 'A Sticky Notes PWA a working with local storage',
    longDescription:
      'This is a RESTful API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete tasks and users, and includes features such as pagination, sorting, filtering, and authentication.',
    github: 'https://github.com/username/task-manager-api',
    link: '',
    image: 'https://example.com/images/task-manager-api.jpg',
  },
  {
    title: 'TaskList',
    tags: ['Angular'],
    description: 'A TaskList application',
    longDescription:
      'This is a real-time chat application built with React, Node.js, and Socket.IO. It allows users to create and join chat rooms, and includes features such as user authentication, typing indicators, and message history.',
    github: 'https://github.com/username/chat-app',
    link: 'https://chat-app-socketio.herokuapp.com',
    image: 'https://example.com/images/chat-app.jpg',
  },
  {
    title: 'Image-WebApp',
    tags: ['Full Stack', 'Angular', 'SpringBoot'],
    description:
      'An application that displays images and manages them in the backend',
    longDescription:
      'This is a weather web application built with React, the OpenWeather API, and Bootstrap. It displays the current weather and a 5-day forecast for a location, and includes features such as geolocation, unit conversion, and error handling.',
    github: 'https://github.com/username/weather-app',
    link: 'https://my-weather-app.com',
    image: 'https://example.com/images/weather-app.jpg',
  },
];
