[![Code Climate](https://codeclimate.com/repos/54ddc110e30ba070710052ce/badges/c04aa5a3fc98b0c98879/gpa.svg)](https://codeclimate.com/repos/54ddc110e30ba070710052ce/feed) [![Test Coverage](https://codeclimate.com/repos/54ddc110e30ba070710052ce/badges/c04aa5a3fc98b0c98879/coverage.svg)](https://codeclimate.com/repos/54ddc110e30ba070710052ce/feed)

## What is Makerbot?

Makerbot is the digital assistant for Makers Academy. It was born out of a need for a user interface to pull together the resources we all use regularly. It lives inside the Makers' Slack environment. 
Makerbot is modular and open source so if you have any ideas you would like incorporated into Makerbot, get coding! See the section: Writing Modules for Makerbot if you would like to know how.

## How to Use Makerbot

To get my attention, click on me in the Makers' Slackbot and say 'mbot' followed by a command:

* **help** - will show you all commands. Makerbot is always updating so it's always good to check my help commands e.g. 'mbot help'
* **pills** - will show all the Makers pills - use with an argument to get the link - e.g. 'mbot pills' followed by 'mbot pills pill.md'
* **challenges** - will show all the Makers challenges - use with an argument to get the link - e.g. 'mbot challenges' followed by 'mbot challenges challenge.md'
* **talks** - will show you the talks taking place - use with the following arguments: 'next', 'today' and 'tomorrow' e.g. 'mbot talks next Monday'
* **121** - will show you the 121 schedule at Makers (remember to login!) e.g. 'mbot 121'
* **q** - will answer your question using Wolfram Alpha e.g. "mbot q 'What's the airspeed of an unladen swallow?'"
* **knockknock** - will return a knock-knock joke
* **lunch** - uses the yelp API to return a list of restaurants around Makers Academy. If you give the command 'lunch random' it will return a random selection from the list of restaurants. If you give the command 'lunch +name-of-restaurant' it will return the address for that restaurant. 
* **students** - will return a list of students in the December cohort at Makers Academy. If you give the command 'student +name of student', it will return a quote from that student 

## Powered By

* Javascript
* Node.js
* Mocha
* Chai
* Grunt
* Google Calendar
* Wolfram Alpha
* Github

## Team/Contributors 

* [Clint Pijuan](https://github.com/clint77)
* [Danielle Demkiw](https://github.com/ddemkiw)
* [Ptolemy Barnes](https://github.com/ptolemybarnes)
* [Jin Dai](https://github.com/jindai1783)
* [Jacob Mitchinson](https://github.com/jacobmitchinson)


## Writing Modules for Makerbot

Makerbot has a standarised way of incorporating new modules that make it easy to write new modules for Makerbot. 

To create your new module, you must provide the public interface with a single #getResponse method. This method should take two arguments:   
* the extra parameters/arguments you wish to use with Makerbot e.g. 'mbot superawesome moreawesome' 
*and a callback which will callback to the commandParser. 

For example:


```javascript
var api = require('api');
var readAPI = api();

var SuperAwesomeModule = function() {

};

SuperAwesomeModule.prototype.getResponse = function(arguments, callback) {
    if(arguments === 'moreawesome') {
        readAPI.fetch("I want some awesome things from you", function(awesomethings){
            callback(awesomethings);
        });
    };
};
```





