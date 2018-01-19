import Controller from '@ember/controller';
import BpmnViewer from 'npm:bpmn-js';
import Modeler from 'npm:bpmn-js/lib/Modeler';
import Ember from 'ember';
export default Controller.extend({

	actions: {
		render: function() {
			var viewer = new BpmnViewer({ container: '#canvas' });
			var bpmnXML = this.model.bpmn.responseText;
			viewer.importXML(bpmnXML, function(err) {

				if (!err) {
					Ember.Logger.info('success!');
					viewer.get('canvas').zoom('fit-viewport');
				} else {
					Ember.Logger.error('something went wrong:', err);
				}
			});
		}, 
		
		edit: function() {
			var modeler = new Modeler({ container: '#canvas' });
			var bpmnXML = this.model.bpmn.responseText;
			// import diagram
			modeler.importXML(bpmnXML, function(err) {
				if (!err) {
					Ember.Logger.info('BPMN was Loaded succefully!');
					modeler.get('canvas').zoom('fit-viewport');
				} else {
					Ember.Logger.error('something went wrong:', err);
				}
			});
		}
	}
});
