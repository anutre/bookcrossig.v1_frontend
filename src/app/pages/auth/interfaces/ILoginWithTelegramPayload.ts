export interface ILoginWithTelegramPayload {
  data: {
    type: string;
    attributes: {
      id: string;
      first_name: string;
      username: string;
      photo_url: string;
    };
  };
}
