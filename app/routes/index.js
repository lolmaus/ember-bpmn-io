import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		return {
			bpmn: '<?xml version="1.0" encoding="UTF-8"?> ' + 
'<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.activiti.org/test">' + 
'  <process id="TEST-001" name="TEST-001 Test process" isExecutable="true">' + 
'    <startEvent id="startevent1" name="Start"></startEvent>' + 
'    <userTask id="usertask1" name="Display test process message" activiti:formKey="process-stub/test.testProcess?processName=${process_name}&amp;timeout=2000"></userTask>' + 
'    <endEvent id="endevent1" name="End"></endEvent>' + 
'    <sequenceFlow id="flow2" sourceRef="usertask1" targetRef="endevent1"></sequenceFlow>' + 
'    <sequenceFlow id="flow3" sourceRef="startevent1" targetRef="usertask1"></sequenceFlow>' + 
'  </process>' + 
'  <bpmndi:BPMNDiagram id="BPMNDiagram_TEST-001">' + 
'    <bpmndi:BPMNPlane bpmnElement="TEST-001" id="BPMNPlane_TEST-001">' + 
'      <bpmndi:BPMNShape bpmnElement="startevent1" id="BPMNShape_startevent1">' + 
'        <omgdc:Bounds height="35.0" width="35.0" x="290.0" y="200.0"></omgdc:Bounds>' + 
'      </bpmndi:BPMNShape>' + 
'      <bpmndi:BPMNShape bpmnElement="usertask1" id="BPMNShape_usertask1">' + 
'        <omgdc:Bounds height="101.0" width="105.0" x="450.0" y="167.0"></omgdc:Bounds>' + 
'      </bpmndi:BPMNShape>' + 
'      <bpmndi:BPMNShape bpmnElement="endevent1" id="BPMNShape_endevent1">' + 
'        <omgdc:Bounds height="35.0" width="35.0" x="660.0" y="200.0"></omgdc:Bounds>' + 
'      </bpmndi:BPMNShape>' + 
'      <bpmndi:BPMNEdge bpmnElement="flow2" id="BPMNEdge_flow2">' + 
'        <omgdi:waypoint x="555.0" y="217.0"></omgdi:waypoint>' + 
'        <omgdi:waypoint x="660.0" y="217.0"></omgdi:waypoint>' + 
'      </bpmndi:BPMNEdge>' + 
'      <bpmndi:BPMNEdge bpmnElement="flow3" id="BPMNEdge_flow3">' + 
'        <omgdi:waypoint x="325.0" y="217.0"></omgdi:waypoint>' + 
'        <omgdi:waypoint x="450.0" y="217.0"></omgdi:waypoint>' + 
'      </bpmndi:BPMNEdge>' + 
'    </bpmndi:BPMNPlane>' + 
'  </bpmndi:BPMNDiagram>' + 
'</definitions>'
		}
	}
});
