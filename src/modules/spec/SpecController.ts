import { get, prefix } from 'vovk';
import V3Service from './V3Service';

@prefix('spec')
export default class SpecController {
  @get('v3/segment.json')
  static getSegmentDefinition() {
    return V3Service.getSegmentDefinition();
  }

  @get('v3/config.json')
  static getConfigDefinition() {
    return V3Service.getConfigDefinition();
  }

  @get('v3/meta.json')
  static getMetaDefinition() {
    return V3Service.getMetaDefinition();
  }

  @get('v3/schema.json')
  static getFullDefinition() {
    return V3Service.getFullDefinition();
  }
}
