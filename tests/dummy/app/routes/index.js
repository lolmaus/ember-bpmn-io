import Route from '@ember/routing/route';
import $ from 'jquery';
import {hash} from 'rsvp';
export default Route.extend({
  model: function() {
    return hash({
      bpmn: $.get('/ember-bpmn-io/assets/bpmn/simple.bpmn') // or a local file of your choice
      .then(function(response){
       return response;
      })
    });
  }
});