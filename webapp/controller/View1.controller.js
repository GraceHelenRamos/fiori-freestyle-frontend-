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
               // model padrão da view
               
               var oView  = this.getView();
               debugger;
               var oModel1 = new sap.ui.model.json.JSONModel();
               oModel1.setData({"usuario": {"nome": "José"}});
               oModel1.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
               oView.setModel(oModel1,"oneway");

               var oModel2 = new sap.ui.model.json.JSONModel();
               oModel2.setData({"usuario": {"nome": "José"}});
               oModel2.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
               oView.setModel(oModel2,"twoway");

               var oModel3 = new sap.ui.model.json.JSONModel();
               oModel3.setData({"usuario": {"nome": "José"}});
               oModel3.setDefaultBindingMode(sap.ui.model.BindingMode.OneTime);
               oView.setModel(oModel3,"onetime");
            },
            // nos blocos a baixo temos um binding w cadaum sofrera uma ação quando clicado no botão
            onTestOneWay: function(){
                var oView  = this.getView();

                var oModel = oView.getModel("oneway");
                var oData  = oModel.getData();
                oData.usuario.nome += ".";
                oModel.setData(oData);
                //oView.setModel(oModel,"oneway");
            },

            onTestTwoWay: function(){
                var oView  = this.getView();
                
                var oModel = oView.getModel("twoway");
                var oData  = oModel.getData();
                oData.usuario.nome += ".";
                oModel.setData(oData);
                //oView.setModel(oModel,"twoway");
            },

            onTestOneTime: function(){
                var oView  = this.getView();
                
                var oModel = oView.getModel("onetime");
                var oData  = oModel.getData();

                debugger;

                oData.usuario.nome += ".";
                oModel.setData(oData);
                //oView.setModel(oModel,"onetime");
            }
        });
    });