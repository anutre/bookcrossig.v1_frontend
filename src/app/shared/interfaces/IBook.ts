export interface IBook {
  authors: string[];
  categories: string[];
  id: string | null;
  photo: string;
  publicationTime?: number;
  type: number;
  title: string;
  description?: string;
  status?: number;
  user: {
    nickname: string;
    id: string;
  };
}
