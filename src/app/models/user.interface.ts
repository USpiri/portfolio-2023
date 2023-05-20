export interface User {
  _id?: string;
  name: string;
  title: string;
  description: string[];
  birthDate: Date;
  phone: string;
  email: string;
  location: string;
  image?: Image;
  media: SocialMedia;
}

export interface SocialMedia {
  twitter: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Image {
  _id?: string;
  imageSrc: string;
  thumbnailUrl: string;
  type?: ImageType;
}

export type ImageType = 'NATURE' | 'PORTRAIT';
