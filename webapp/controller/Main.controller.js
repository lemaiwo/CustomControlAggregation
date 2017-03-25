sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("DemoCustomControl.controller.Main", {
		onInit:function(){
			this.getView().setModel(
				new JSONModel(
					{
						grid:[{
							image:"images/sap.jpg",
							hyperlink:"https://www.sap.com/community.html"
						},{
							image:"images/google.jpg",
							hyperlink:"http://www.google.be"
						},{
							image:"images/twitter.png",
							hyperlink:"http://www.twitter.com"
						},{
							image:"images/facebook.png",
							hyperlink:"http://www.facebook.com"
						},{
							image:"images/youtube.png",
							hyperlink:"http://www.youtube.com"
						},{
							image:"images/sapui5.jpg",
							hyperlink:"https://sapui5.hana.ondemand.com"
						},{
							image:"images/cloud.png",
							hyperlink:"http://account.hana.ondemand.com"
						},{
							image:"images/fiori.png",
							hyperlink:"https://www.sapfioritrial.com/"
						}]
					}));
		}
	});
});