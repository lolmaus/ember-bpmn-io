// We need the following loaded here to include in application
import BpmnViewer from 'npm:bpmn-js';
import BpmnModeler from 'npm:bpmn-js/lib/Modeler';
import Ember from 'ember';
Ember.Logger.info("Loaded BpmnViewer ( " +  BpmnViewer.name +" )and BpmnModeler (" + BpmnModeler.name + ")");
export { default } from 'ember-bpmn-io/components/bpmn-canvas';