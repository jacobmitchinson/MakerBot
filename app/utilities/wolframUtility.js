var wolfram = require('wolfram-node').init(process.env.WOLFRAM_TOKEN);

var WolframAPI = function() {

};

WolframAPI.prototype.getResponse = function(question, callback) {
  if(question[0] == null) {
    callback(true, "Please ask a question e.g. 'mbot q \'How much does the earth weigh?\''");
  } else {
    var question = question.join(" ");
    this.ask(question, function(err, answer) {
      callback(null, answer);
    });
  }
};

WolframAPI.prototype.ask = function(question, callback) {

  var data = {
    query: question,
    primary: true
  };

  wolfram.ask(data, function(err, results) {
    if(results.$.success === 'false' || err) {
      callback(true, "Sorry, I don't know what you mean.");
    } else {
      callback(null, results.pod[1].subpod[0].plaintext[0]);
    }
  });

};

module.exports = WolframAPI;