const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "kk1dws",
  // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: true,
  },
});
