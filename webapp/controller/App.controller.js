sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app.SmartControlTutorial.controller.App", {
		onInit: function () {
			this.getView().bindElement("/Products('4711')");
		}
	});
});