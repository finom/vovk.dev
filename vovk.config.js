/** @type {import('vovk-cli').VovkConfig} */
const config = {
  validationLibrary: 'vovk-zod',
  validateOnClient: 'vovk-zod/validateOnClient',
  templates: {
    controller: 'vovk-zod/templates/controller.ejs',
    service: 'vovk-cli/templates/service.ejs',
    worker: 'vovk-cli/templates/worker.ejs',
  },
};
module.exports = config;
