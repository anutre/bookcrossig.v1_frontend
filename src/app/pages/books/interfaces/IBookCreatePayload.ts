export interface IBookCreatePayload {
  data: {
    type: string;
    attributes: {
      data: FormData;
    };
  };
}
