import { Blog } from 'src/app/models/blog.interface';

export const BLOGS: Blog[] = [
  {
    title: '10 tips for improving your productivity',
    description:
      'In this post, we share 10 tips for improving your productivity and getting more done in less time.',
    author: 'John Doe',
    date: new Date('2022-01-15'),
    tags: ['productivity', 'time management', 'work'],
    link: 'https://example.com/blog/post1',
  },
  {
    title: 'The benefits of meditation',
    description:
      'In this post, we explore the many benefits of meditation and how it can help you reduce stress and improve your mental health.',
    author: 'Jane Smith',
    date: new Date('2022-02-10'),
    tags: ['meditation', 'mental health', 'stress'],
    link: 'https://example.com/blog/post2',
  },
  {
    title: 'How to improve your public speaking skills',
    description:
      'In this post, we share some tips for improving your public speaking skills and overcoming your fear of public speaking.',
    author: 'Bob Johnson',
    date: new Date('2022-03-05'),
    tags: ['public speaking', 'communication', 'fear'],
    link: 'https://example.com/blog/post3',
  },
  {
    title: 'The importance of sleep for your health',
    description:
      "In this post, we discuss the importance of sleep for your overall health and wellbeing, and share some tips for getting a better night's sleep.",
    author: 'Sarah Lee',
    date: new Date('2022-04-01'),
    tags: ['sleep', 'health', 'wellbeing'],
    link: 'https://example.com/blog/post4',
  },
];
