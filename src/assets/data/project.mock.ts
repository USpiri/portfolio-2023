import { Project } from "src/app/models/project.interface";

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
    title: 'Movie Recommendation App',
    tags: ['Python', 'Scikit-learn', 'Flask'],
    description: 'An app that recommends movies based on user preferences',
    longDescription:
      "This is a machine learning-based movie recommendation web application built with Python, Scikit-learn, and Flask. It uses collaborative filtering to recommend movies based on a user's ratings and preferences.",
    github: 'https://github.com/username/movie-recommendation-app',
    link: 'https://movie-recommendation-app.herokuapp.com',
    image: 'https://example.com/images/movie-recommendation-app.jpg',
  },
  {
    title: 'Social Media App',
    tags: ['React', 'Firebase', 'Material UI'],
    description:
      'A social media app where users can share posts and interact with each other',
    longDescription:
      'This is a social media web application built with React, Firebase, and Material UI. It features user authentication, real-time updates, and the ability to create, read, update, and delete posts.',
    github: 'https://github.com/username/social-media-app',
    link: 'https://social-media-app.firebaseapp.com',
    image: 'https://example.com/images/social-media-app.jpg',
  },
  {
    title: 'Portfolio Website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A personal portfolio website showcasing my projects and skills',
    longDescription:
      'This is a personal portfolio website built with HTML, CSS, and JavaScript. It showcases my projects and skills, and includes a contact form for potential clients or employers to get in touch.',
    github: 'https://github.com/username/portfolio-website',
    link: 'https://my-portfolio-website.com',
    image: 'https://example.com/images/portfolio-website.jpg',
  },
  {
    title: 'Task Manager API',
    tags: ['Node.js', 'Express', 'MongoDB'],
    description: 'A RESTful API for managing tasks and users',
    longDescription:
      'This is a RESTful API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete tasks and users, and includes features such as pagination, sorting, filtering, and authentication.',
    github: 'https://github.com/username/task-manager-api',
    link: '',
    image: 'https://example.com/images/task-manager-api.jpg',
  },
  {
    title: 'Chat App',
    tags: ['React', 'Node.js', 'Socket.IO'],
    description: 'A real-time chat application',
    longDescription:
      'This is a real-time chat application built with React, Node.js, and Socket.IO. It allows users to create and join chat rooms, and includes features such as user authentication, typing indicators, and message history.',
    github: 'https://github.com/username/chat-app',
    link: 'https://chat-app-socketio.herokuapp.com',
    image: 'https://example.com/images/chat-app.jpg',
  },
  {
    title: 'Weather App',
    tags: ['React', 'OpenWeather API', 'Bootstrap'],
    description:
      'An app that displays the current weather and a 5-day forecast for a location',
    longDescription:
      'This is a weather web application built with React, the OpenWeather API, and Bootstrap. It displays the current weather and a 5-day forecast for a location, and includes features such as geolocation, unit conversion, and error handling.',
    github: 'https://github.com/username/weather-app',
    link: 'https://my-weather-app.com',
    image: 'https://example.com/images/weather-app.jpg',
  },
  {
    title: 'Expense Tracker',
    tags: ['React', 'Firebase', 'Materialize'],
    description: 'A web app for tracking income and expenses',
    longDescription:
      'This is a web application built with React, Firebase, and Materialize. It allows users to track their income and expenses, and includes features such as user authentication, category filtering, and monthly and yearly reports.',
    github: 'https://github.com/username/expense-tracker',
    link: 'https://expense-tracker-app.firebaseapp.com',
    image: 'https://example.com/images/expense-tracker.jpg',
  },
];
