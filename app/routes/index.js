import Route from '@ember/routing/route';
import {hash} from 'rsvp';
import $ from "jquery";
export default Route.extend({
	model: function() {
		return {
			bpmn: $.getJSON("bpmn/QMS-002 Froot Loops Demo.bpmn")
		};
	}
});
