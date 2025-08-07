import { get, prefix } from 'vovk';
import V3SchemaService from './V3SchemaService';

@prefix('v3')
export default class V3SSchemaController {
  @get('segment.json')
  static getSegmentDefinition() {
    return V3SchemaService.getSegmentDefinition();
  }

  @get('config.json')
  static getConfigDefinition() {
    return V3SchemaService.getConfigDefinition();
  }

  @get('meta.json')
  static getMetaDefinition() {
    return V3SchemaService.getMetaDefinition();
  }

  @get('schema.json')
  static getFullDefinition() {
    return V3SchemaService.getFullDefinition();
  }
}
