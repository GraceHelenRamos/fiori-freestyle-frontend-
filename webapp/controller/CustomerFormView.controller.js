sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /** passar todas as classe que vc vai utilizar dentro desse controler 
     * * @param {typeof sap.ui.core.mvc.Controller} Controller
   */  
    function (Controller) {
        "use strict";

        return Controller.extend("zov.controller.CustomerFormView", {
            onInit: function () {
                debugger;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); //pegando o objeto de rotas
                oRouter.getRoute("RouteCustomerNew").attachMatched(this._onRouteMatchedNew,this);// quando alguém chamar o objeto ele deve ser vinculado com a rota seguindo o atach endiante
                oRouter.getRoute("RouteCustomerEdit").attachMatched(this._onRouteMatchedEdit,this);
            },

            onView1: function(){
                var r = sap.ui.core.UIComponent.getRouterFor(this);
                r.navTo("RouteView1");
            },
            onNavBack: function(){
                const oHistory = sap.ui.core.routing.History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var r = sap.ui.core.UIComponent.getRouterFor(this);
                    r.navTo("RouteView1");
                }
            },
            _onRouteMatchedNew: function(oEvent){
                alert("Modo criação do cliente");
            },
            _onRouteMatchedEdit: function(oEvent){
                var that = this;
                var oArgs = oEvent.getParameter("arguments"); //pegar os parametros para o argumento 
                var sCustomerId =  oArgs.CustomerId; // o argumento é o CustomerId

                alert("Modo de modificação do cliente", sCustomerId);
            }

        });
    });
    