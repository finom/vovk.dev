const VERSION = '3';

export default class V3Service {
  static getSegmentDefinition() {
    return {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: `https://vovk.dev/api/spec/v${VERSION}/segment.json`,
      title: 'Vovk segment definition',
      description: '',
      version: VERSION + '.0.0',
      type: 'object',
      required: ['emitSchema', 'segmentName', 'controllers'],
      properties: {
        $schema: {
          type: 'string',
          description: 'Schema URL',
          enum: [`https://vovk.dev/api/schema/v${VERSION}/segment.json`],
        },
        emitSchema: {
          type: 'boolean',
          description: 'Defines if the schema is going to be emitted for this segment',
        },
        segmentName: {
          type: 'string',
          description: "Segment name, for the root segment it's an empty string",
        },
        controllers: {
          type: 'object',
          description: 'List of controllers as key-value pairs for fast access',
          additionalProperties: {
            type: 'object',
            required: ['rpcModuleName', 'originalControllerName', 'prefix', 'handlers'],
            properties: {
              rpcModuleName: {
                type: 'string',
                description: "RPC name that's going to be used in the client",
              },
              originalControllerName: {
                type: 'string',
                description: 'Original name of the controller class',
              },
              prefix: {
                type: 'string',
                description: 'An argument of @prefix class decorator',
              },
              handlers: {
                type: 'object',
                description: 'List of handlers as key-value pairs for fast access',
                additionalProperties: {
                  type: 'object',
                  required: ['path', 'httpMethod'],
                  properties: {
                    path: {
                      type: 'string',
                      description: "Endpoint that's concatenated with the prefix",
                    },
                    httpMethod: {
                      type: 'string',
                      description: 'HTTP method',
                      enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
                    },
                    validation: {
                      type: 'object',
                      description: 'Validation for body, query, params, output and iteration',
                      properties: {
                        body: {
                          type: 'object',
                          description: 'Validation for request body',
                        },
                        query: {
                          type: 'object',
                          description: 'Validation for query parameters',
                        },
                        params: {
                          type: 'object',
                          description: 'Validation for route parameters',
                        },
                        output: {
                          type: 'object',
                          description: 'Validation for response',
                        },
                        iteration: {
                          type: 'object',
                          description: 'Validation for iteration',
                        },
                      },
                      additionalProperties: false,
                    },
                    openapi: {
                      $ref: 'https://spec.openapis.org/oas/3.1/schema/2021-05-20',
                    },
                    custom: {
                      type: 'object',
                      description: 'Custom data that can be defined by a custom decorator',
                      additionalProperties: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
  }

  static getConfigDefinition() {
    return {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: `https://vovk.dev/api/spec/v${VERSION}/config.json`,
      title: 'Schema for Vovk config.json file',
      description: '',
      version: VERSION + '.0.0',
      type: 'object',
      additionalProperties: true,
      properties: {
        $schema: {
          type: 'string',
          description: 'Schema URL',
          enum: [`https://vovk.dev/api/schema/v${VERSION}/config.json`],
        },
      },
    };
  }

  static getFullDefinition() {
    return {
      $schema: 'https://json-schema.org/draft/2020-12/schema',
      $id: `https://vovk.dev/api/spec/v${VERSION}/schema.json`,
      title: 'Vovk full schema definition',
      description: 'Combined schema containing config and segments',
      version: VERSION + '.0.0',
      type: 'object',
      required: ['config', 'segments'],
      properties: {
        config: {
          $ref: `https://vovk.dev/api/schema/v${VERSION}/config.json`,
        },
        segments: {
          type: 'object',
          description: 'Map of segment names to segment definitions',
          additionalProperties: {
            $ref: `https://vovk.dev/api/schema/v${VERSION}/segment.json`,
          },
        },
      },
    };
  }
}
