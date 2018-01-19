import Route from '@ember/routing/route';

import $ from 'jquery';
export default Route.extend({
	model: function() {
		return {
			bpmn: $.getJSON('assets/bpmn/simple.bpmn')
		}; 
	}
});
