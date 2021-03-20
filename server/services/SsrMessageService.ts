interface GetMessageResponse {
  text: string;
}

export class SsrMessageService {
  static async getMessage(): Promise<GetMessageResponse> {
    return Promise.resolve({ text: 'This text from the server!' })
  }
}
