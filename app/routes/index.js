import Route from '@ember/routing/route';
<<<<<<< HEAD
import {hash} from 'rsvp';
import $ from "jquery";
export default Route.extend({
	model: function() {
		return {
			bpmn: $.getJSON("bpmn/QMS-002 Froot Loops Demo.bpmn")
		};
=======

import $ from 'jquery';
export default Route.extend({
	model: function() {
		return {
			bpmn: $.getJSON('assets/bpmn/simple.bpmn')
		}; 
>>>>>>> d606326bff1f79202c27d9a47dcbe832de0af691
	}
});
