# ember-bpmn-io

This Ember addon integrates bpmn-io [http://bpmn-io] to make rendering BPMN diagrams in your application a breeze. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installed Dependencies
* ember-browserify
* ember-cli-sass

## Installation

`ember install ember-bpmn-io`

### Required for npm: style imports
### Until Ember gets it together on npm imports :)
`npm install --save-dev ember-browserify`

# Sample Use:

* Create an application (if you don't have one)

`ember new ember-bpmn-io-test`
`cd ember-bpmn-io-test`

* Copy the sample BPMN to your public/assets/bpmn folder

`cp -r node_modules/ember-bpmn-io/tests/dummy/public/assets public`

* Add a route

`ember g route bpmn`

* Overwrite app/routes/bpmn.js with

`import Route from '@ember/routing/route';`  
`import $ from 'jquery';`  
`import {hash} from 'rsvp';`  
`export default Route.extend({`  
`model: function() {`  
&nbsp;&nbsp;`return hash({`  
`            bpmn: $.get('assets/bpmn/simple.bpmn')`  
`            .then(function(response){`  
`                return response;`  
`            })`  
`        });`  
`    }`  
`});`  

* Overwrite app/templates/bpmn.hbs with

`{{bpmn-canvas bpmn=model.bpmn}}`  
`{{outlet}}`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200/bpmn](http://localhost:4200/bpmn)

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
