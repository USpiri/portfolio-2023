export interface Image {
  _id?: string;
  src: string;
  thumbnail?: string;
  type?: ImageType;
}

export type ImageType = 'NATURE' | 'PORTRAIT';
