import Route from '@ember/routing/route';
import $ from 'jquery';
import {hash} from 'rsvp';
export default Route.extend({
	model: function() {
		return hash({
			bpmn: $.get('assets/bpmn/simple.bpmn')
			.then(function(response){
				return response;
			})
		}); 
	}
});
