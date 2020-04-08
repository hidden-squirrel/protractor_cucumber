var reportportalScreenshotPlugin = [{
  package: 'reportportal-agent-cucumber',
  reportPortalAgentConfig: {
    token: "c8718c34-7d25-45f5-89cb-28da0f01eee9",
    endpoint: "https://web.demo.reportportal.io/api/v1",
    launch: "test_launch",
    project: "hidden-squirrel_personal",
    takeScreenshot: "onFailure"
  }
}]

module.exports = { reportportalScreenshotPlugin }