sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"app/SmartControlTutorial/shellMock/UShellCrossApplicationNavigationMock"
], function (Controller,UShellCrossApplicationNavigationMock) {
	"use strict";

	return Controller.extend("app.SmartControlTutorial.controller.App", {
		onInit: function () {
			this.getView().bindElement("/Products('4711')");
			
			// for smart link
			UShellCrossApplicationNavigationMock.mockUShellServices({
				tutorial_03_Name: {
					links: [
						{
							action: "sap_se",
							intent: "http://www.sap.com",
							text: "SAP SE"
						}, {
							action: "sap_sapphire",
							intent: "http://www.sap.com/sapphire",
							text: "SAP Sapphire"
						}, {
							action: "app3",
							intent: "http://www.sap.com/hana",
							text: "App3"
						}
					]
				}
			});
			// for smart link
		}
	});
});