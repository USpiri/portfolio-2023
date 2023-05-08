export interface Blog {
  _id?: string;
  title: string;
  description: string;
  author: string;
  date: Date;
  tags: string[];
  link: string;
}
