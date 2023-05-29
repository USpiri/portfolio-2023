import { Image } from '@models';

export interface Project {
  _id?: string;
  title: string;
  tags: string[];
  description: string;
  longDescription: string;
  github?: string;
  link?: string;
  image?: Image;
}
