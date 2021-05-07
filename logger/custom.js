const Transport = require("winston-transport");

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
module.exports = class CustomTransport extends Transport {
  constructor(opts) {
    super(opts);

    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail,
    //   logentries, etc.).
    //

    this.callJira();
  }

  callJira() {
    console.log('hey there');
  }

  log(info, callback) {
    setImmediate(() => {
      
        console.log('info', info);
        console.log('meta1', info.meta1);
        console.log('message', info.message);
        console.log('level', info.level);
      
        this.emit("logged", info);
    });

    // Perform the writing to the remote service

    callback();
  }
};
