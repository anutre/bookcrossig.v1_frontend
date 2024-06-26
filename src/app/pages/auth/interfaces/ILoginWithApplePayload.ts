export interface ILoginWithApplePayload {
  data: {
    type: string;
    attributes: {
      id: string;
      code: string;
    };
  };
}
