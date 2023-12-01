const { defineConfig } = require("cypress");

module.exports = defineConfig({
  headers: { "Accept-Encoding": "gzip, deflate" },
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});