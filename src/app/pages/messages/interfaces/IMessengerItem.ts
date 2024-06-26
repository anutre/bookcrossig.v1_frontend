export interface IMessengerItem {
  date: string;
  text: string;
  id: string;
  viewed: boolean;
  user_receive: {
    id: string;
    name: string;
    nickname: string;
    photo: string;
  };
}
