var slackbot      = require('./slackbot');
var commandParser = require('./commandParser');

var bot           = new slackbot(process.env.SLACK_TOKEN, 
                                  commandParser);

var commandLibrary = require('./config/commands');
var utilitiesApis  = require('./config/apis');


bot.use(function(message, cb) {
  if ('message' == message.type) {
    console.log(message.user + ' said: ' + message.text);
  }
  cb();
});

bot.use(function(message, cb) {
  if (commandLibrary[message.command] != undefined) {
    var responseObject = new commandLibrary[message.command](utilitiesApis[message.command]);
    responseObject.getResponse(message.args, function(err, content) {
      bot.sendMessage(message.channel, content);
    });
  }
  cb();
});

bot.connect();

