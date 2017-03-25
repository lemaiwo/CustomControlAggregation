sap.ui.define(["sap/ui/core/Control"], function(Control) {
	"use strict";
	return Control.extend("DemoCustomControl.control.CustomList", {
		"metadata": {
			"properties": {},
			"events": {},
			"aggregations":{
				"items":{
					"type":"DemoCustomControl.control.CustomListItem",
					"multiple":true,
					"singularName":"item"
				}
			}
		},
		init: function() {},
		renderer: function(oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("customlist");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("<ul");
			oRm.write(">");
			$.each(oControl.getItems(),function(key,value){
				oRm.renderControl(value);
			});
			oRm.write("</ul>");
			oRm.write("</div>");
		},
		onAfterRendering: function(evt) {}
	});
});