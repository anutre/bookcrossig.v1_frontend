export interface IChatUser {
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  id: string;
  name: string | null;
  nickname: string;
  photo: string | null;
}
