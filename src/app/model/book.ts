export const categories = [
  'Action and Adventure',
  'Classics',
  'Comic Book or Graphic Novel',
  'Detective and Mystery',
  'Fantasy',
  'Historical Fiction',
  'Horror',
  'Literary Fiction',
  'Romance',
  'Science Fiction (Sci-Fi)',
  'Short Stories',
  'Suspense and Thrillers',
  'Biographies and Autobiographies',
  'Cookbooks',
  'History',
  'Poetry',
];
export interface IBook {
  id: number;
  title: string;
  author: string;
  published_year: number;
  category: string;
  cover_image: string;
}
export class Book {}
