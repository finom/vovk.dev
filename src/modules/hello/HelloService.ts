/**
 * Perform DB requests or call 3rd party APIs
 */
export default class HelloService {
  /**
   * Return a greeting
   */
  static async getHello() {
    return { greeting: 'Hello world!' };
  }
}
