/**
 * Perform DB requests or call 3rd party APIs
 */
export default class HelloService {
  /**
   * Return a greeting
   */
  static async getHello() {
    console.log('Hello generated');
    return { greeting: 'Hello world!' };
  }
}
