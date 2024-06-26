export interface ISearchBook {
  isbn: number;
  photo: string;
  title: string;
  authors: string[];
  categories: string[];
  publicationTime: number;
  type?: number;
}
