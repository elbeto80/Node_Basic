const { IncomingWebhook } = require("@slack/webhook");

const webHook = new IncomingWebhook(process.env.SLACK_WEBHHOK);

const loggerStream = {
  write: (message) => {
    webHook.send({
      text: message,
    });
  },
};

module.exports = { loggerStream };
