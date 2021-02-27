export class DataService {
  static async getData(): Promise<{ text: string }> {
    return { text: 'This text from the server appears before the bundle is loaded!' }
  }
}
