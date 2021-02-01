const isCI = require("is-ci")

module.exports = (on, config) => {
  if (!isCI) {
    config.baseUrl = "http://localhost:3000"
  }
  Object.assign(config, {
    integrationFolder: "cypress/e2e",
  })

  return config
}
