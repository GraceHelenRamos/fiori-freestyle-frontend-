sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
    /** passar todas as classe que vc vai utilizar dentro desse controler
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) { // aqui nos () deve conter dodas as classes sap que forão declaradas da linha 2 para baixo  colocando o nome do final dela 
        "use strict";

        return Controller.extend("zov.controller.View1", {
            onInit: function () {
             /*   // model padrão da view
                var oView  = this.getView();
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({"usuario": {"nome": "Vinicius"}});
                oView.setModel(oModel);*/
                
                debugger;
                // model com o nome "dados"
                var oView  = this.getView();
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({"usuario": {"nome": "José"}});
                oView.setModel(oModel,"dados");
            },

            onTestModels: function(){
                // model i18n
                var oI18n = this.getView().getModel("i18n").getResourceBundle();
                var sText = oI18n.getText("title");

                console.log("Texto com a chave 'title'");
                console.log(sText);

                console.log("------------------------------------------");

                // model de usuários
                var oModel = this.getOwnerComponent().getModel("usuarios");
                var oData = oModel.getData();
                console.log("Model dos usuários")
                console.log(oData);

                console.log("------------------------------------------");

                // model do serviço
                var oModel = this.getOwnerComponent().getModel();
                oModel.read("/OVCabSet",{
                   
                    success: function(oData, oResponse){ 
                        debugger;
                        console.log("Dados retornados do serviço")
                        console.log(oData);
                        console.log(oResponse);
                    },
                    error: function(oError){
                        console.log(oError);
                    }
                });
            }
        });
    });