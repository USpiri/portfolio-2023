export interface User {
  _id?: string;
  name: string;
  title: string;
  description: string[];
  birthDate: Date;
  phone: string;
  email: string;
  location: string;
  image?: string;
  media: SocialMedia;
}

export interface SocialMedia {
  twitter: string;
  github: string;
  linkedin: string;
  instagram: string;
}
