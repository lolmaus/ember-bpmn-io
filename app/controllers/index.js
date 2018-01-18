import Controller from '@ember/controller';
import BpmnViewer from 'npm:bpmn-js';
export default Controller.extend({

	actions: {


		render: function() {
			var viewer = new BpmnViewer({ container: '#canvas' });

			viewer.importXML(pizzaDiagram, function(err) {

				if (!err) {
					console.log('success!');
					viewer.get('canvas').zoom('fit-viewport');
				} else {
					console.log('something went wrong:', err);
				}
			});

		}
	}
});
