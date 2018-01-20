import Component from '@ember/component';
import layout from '../templates/components/bpmn-canvas';
import BpmnViewer from 'npm:bpmn-js';
import BpmnModeler from 'npm:bpmn-js/lib/Modeler';
import Ember from 'ember';
export default Component.extend({
	layout, 
	viewer: null,
	modeler: null,
	bpmn: null, 
	actions: {
		render: function() {
			var viewer = this.get('viewer'); 
			if (!viewer) {
				viewer = new BpmnViewer({ container: '#canvas' });
				this.set('viewer', viewer);
			}
			var bpmn = this.get('bpmn');
			viewer.importXML(bpmn, function(err) {

				if (!err) {
					Ember.Logger.log('success!');
					viewer.get('canvas').zoom('fit-viewport');
				} else {
					Ember.Logger.log('something went wrong:', err);
				}
			});
		}, 
		
		edit: function() {
			var modeler = this.get('modeler'); 
			if (!modeler) {
				modeler = new BpmnModeler({ container: '#canvas' });
				this.set('modeler', modeler);
			}
			var bpmn = this.get('bpmn');
			modeler.importXML(bpmn, function(err) {

				if (!err) {
					Ember.Logger.log('success!');
					modeler.get('canvas').zoom('fit-viewport');
				} else {
					Ember.Logger.log('something went wrong:', err);
				}
			});
		}
	}
});
