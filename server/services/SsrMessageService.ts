interface GetMessageResponse {
  text: string;
}

export class SsrMessageService {
  static async getMessage(): Promise<GetMessageResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { text: 'This text from the server!' }
  }
}
