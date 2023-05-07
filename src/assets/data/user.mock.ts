import { User } from 'src/app/models/user.interface';

export const USER: User = {
  name: 'Uriel Spiridione',
  title: 'Professional web developer',
  description: [
    'I am a professional web developer, photographer, and a student of economics. Currently, I am working as a front-end developer on an Angular team. I consider myself an organized and creative individual who enjoys learning new things, experimenting, and exploring different areas.',
    'Outside of work, photography is my passion. I have been the lead photographer for several important events and have taken photos with models. However, I am currently interested in travel, casual and nature photography more than modeling and social events.',
  ],
  birthDate: new Date('1999-08-04'),
  phone: '+54 351 213-6765',
  email: 'urielspiridione135@gmail.com',
  location: 'Córdoba, Argentina',
  image: '../../../../../assets/images/square.jpg',
};
