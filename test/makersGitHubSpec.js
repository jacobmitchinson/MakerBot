var chai = require('chai');
var phantom = require('phantomjs');
var expect = chai.expect;
var MakersGitHub = require('../app/makersGitHub.js');

describe('Makers GitHub', function() {

  it('should pass', function() {
    var makers = new MakersGitHub();
    expect(makers.repo).to.not.equal(null);
  });

  it('should read a file from Makers GitHub', function(done) {
    var makers = new MakersGitHub();
    var expectedData;
    makers.readFileInfo('.gitignore', function(err, data) {
      expectedData = data;
      console.log(expectedData);

      //-------------------------------------------------
      //<1> expect sitting inside this callback, can work
      //-------------------------------------------------
      expect(expectedData).to.contain('DS');

    });
     done();
  });

  it('should read a file from Makers GitHub', function(done) {
      var makers = new MakersGitHub();
      var expectedData;
      makers.readFileInfo('DOES_NOT_EXIST', function(err, data) {
        expectedData = data;
        console.log(expectedData);

        //-------------------------------------------------
        //<1> expect sitting inside this callback, can work
       //-------------------------------------------------
        expect(expectedData).to.equal(null);

      
      });
      done();
    });

});

//---------------------------------------------------------------
//<3> We need to let Sam to add makerbots into the course repo!!!
//---------------------------------------------------------------