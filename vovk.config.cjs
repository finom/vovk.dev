// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  outputConfig: {
    imports: {
      validateOnClient: 'vovk-ajv',
    },
  },
  moduleTemplates: {
    controller: 'vovk-zod/templates/controller.ejs',
    service: 'vovk-cli/templates/service.ejs',
  },
};
module.exports = config;
