import { NextResponse } from 'next/server';
import { get, prefix } from 'vovk';

@prefix('hello')
export default class HelloController {
  @get('greeting.json')
  static getHello() {
    // NextResponse.json({ greeting: 'Hello world!' }, { headers: { 'x-test': 'world' } });
    return { greeting: 'Hello world!' };
  }
}
