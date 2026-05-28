const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true
  },

  video: true,

  screenshotOnRunFailure: true,

  videosFolder: 'cypress/videos',

  screenshotsFolder: 'cypress/screenshots',

  e2e: {

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },

    env: {
      AdminUser: {
        username: "Admin",
        password: "admin123",
        newPassword: "admin1234",
        licenseExpires: "2025-12-12",
        birthday: "2000-8-8"
      }
    }
  },
});