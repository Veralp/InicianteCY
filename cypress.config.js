const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example/",
    // não vai limpar oe stado da tela após cada item
    testIsolation: false
  },
});
