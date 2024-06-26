export interface IDialogMessage {
  created_at: string;
  deleted_at: string | null;
  id: string;
  pivot: {
    user_sender_id: string;
    messages_id: string;
    user_receive_id: string;
  };
  messages_id: string;
  user_receive_id: string;
  user_sender_id: string;
  text: string;
  updated_at: string;
  user_id: string;
}
