export class SsrMessageService {
  static async getMessage(): Promise<{ text: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { text: 'This text from the server!' }
  }
}
