sap.ui.define([
    "sap/ui/core/mvc/Controller",

],
    /** passar todas as classe que vc vai utilizar dentro desse controler
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) { // aqui nos () deve conter dodas as classes sap que forão declaradas da linha 2 para baixo  colocando o nome do final dela 
        "use strict";

        return Controller.extend("zov.controller.View1", {
            onInit: function () {
            },
            // nos blocos a baixo temos um binding w cadaum sofrera uma ação quando clicado no botão
            onNewCustomer: function(){
                var r = sap.ui.core.UIComponent.getRouterFor(this);
                r.navTo("RouteCustomerNew");
            },

            onEditCustomer1: function(){
                var r = sap.ui.core.UIComponent.getRouterFor(this);
                r.navTo("RouteCustomerEdit",{CustomerId:1});
            }
        });
    });