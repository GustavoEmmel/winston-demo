const { format, createLogger, transports, level } = require("winston");
const { timestamp, combine, printf, colorize, errors } = format;
const SlackHook = require("winston-slack-webhook-transport");
const CustomTransport = require('./custom');

function buildDevLogger() {
  const transport = new CustomTransport();
  // transport.on("logged", (info) => {
  //   // Verification that log was called on your transport
  //   console.log(`Logging! It's happening!`, info);
  // });

  const logFormat = printf(({ level, message, timestamp, stack, meta1 }) => {
    return `${timestamp} ${level}: ${stack || message} -> ${meta1}`;
  });

  return createLogger({
    level: "debug",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [
      new transports.Console(),
      new SlackHook({
        webhookUrl:
          "https://hooks.slack.com/services/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",
      }),
      transport,
    ],
  });
}

module.exports = buildDevLogger;
