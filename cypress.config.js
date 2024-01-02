 import { defineConfig } from 'cypress'
export default defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1669,
  viewportHeight: 911,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    viewportHeight: 680,
    defaultCommandTimeout: 3700	
  },
});
