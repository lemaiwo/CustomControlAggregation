sap.ui.define(["sap/ui/core/Control"], function(Control) {
	"use strict";
	return Control.extend("DemoCustomControl.control.CustomListItem", {
		"metadata": {
			"properties": {
				"href1": "string",
				"src1": "string"
			},
			"events": {}
		},
		init: function() {},
		renderer: function(oRm, oControl) {
			oRm.write("<li");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.write("<a");
			oRm.writeAttributeEscaped("href", oControl.getHref1());
			oRm.write(">");
			oRm.write("<img");
			oRm.writeAttributeEscaped("src", oControl.getSrc1());
			oRm.write(">");
			oRm.write("</img>");
			oRm.write("</a>");
			oRm.write("</li>");
		},
		onAfterRendering: function(evt) {},
		setHref1: function(value) {
			this.setProperty("href1", value, true);
			return this;
		},
		setSrc1: function(value) {
			this.setProperty("src1", value, true);
			return this;
		}
	});
});