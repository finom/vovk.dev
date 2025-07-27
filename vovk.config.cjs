// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  imports: {
    validateOnClient: 'vovk-ajv',
  },
  moduleTemplates: {
    controller: 'vovk-zod/templates/controller.ejs',
    service: 'vovk-cli/templates/service.ejs',
  },
  segmentConfig: {
    '': {
      reExports: {
        'ProgressiveRPC, JSONLinesRPC': 'vovk-examples',
      },
    },
  },
};
module.exports = config;
