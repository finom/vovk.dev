import { get, prefix } from 'vovk';
import HelloService from './HelloService';

@prefix('hello')
export default class HelloController {
  private static helloService = HelloService;

  /**
   * Return a greeting from the HelloService
   */
  @get('greeting.json')
  static async getHello() {
    return this.helloService.getHello();
  }
}
