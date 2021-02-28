export class SsrMessageService {
  static async getMessage(): Promise<{ text: string }> {
    return { text: 'This text from the server appears before the bundle is loaded!' }
  }
}
