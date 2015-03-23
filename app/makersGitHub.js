var Github = require('github-api');
var github = new Github({
  token: process.env.MAKERBOT_GITHUB_TOKEN,
  auth: "oauth"
});



function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  this.repo.read('master', fileName, callback);
};

module.exports = MakersGitHub;