sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("zov.controller.View1", {
            onInit: function () {
            },

            onCreateOVCab: function(){// cadastra as ordens de vendas do cabeçalho
                debugger;
                var oData = {
                    ClienteId: 1,
                    TotalItens: '100.00',
                    TotalFrete: '10.00',
                    TotalOrdem: '110.00',
                    Status: 'N'
                };
                this.create(oData);
            },

            onCreateDeepOVCab: function(){// metodos cadastra além do cabeçalho os items da ordem de vendas 
                debugger;
                var oData = {
                    ClienteId: 1,
                    TotalItens: '100.00',
                    TotalFrete: '10.00',
                    TotalOrdem: '110.00',
                    Status: 'N',
                    toOVItem: [
                        {
                          "Itemid": 1,
                          "Material": "100",
                          "Descricao": "Mouse",
                          "Quantidade": 1,
                          "PrecoUni": '1.00',
                          "Precotot": '1.00'
                        },
                        {
                            "Itemid": 2,
                            "Material": "200",
                            "Descricao": "Teclado",
                            "Quantidade": 2,
                            "PrecoUni": '10.00',
                            "Precotot": '20.00'
                          }
                    ]
                };
                this.create(oData);// chmaando o metodo de criação chamando lá no servidor
            },

            create: function(oData){ // metodo de criação do Cabeçalho da ordem de vendas
                var that   = this; //this ele é uma referencia ao controler
                var oModel = this.getOwnerComponent().getModel();

                this.getView().setBusy(true);//bloqueando a interface ViewS
                oModel.create("/OVCabSet",oData,{
                    success: function(oData2, oResponse){
                        that.getView().setBusy(false);//desbloqueando a interface ViewS
                        debugger;
                        console.log(oData2);
                        console.log(oResponse);
                        if(oResponse.statusCode == 201){
                            
                            that.getView().byId("lastOrdemId").setValue(oData2.OrdemId);// gravar na view
                            that.getView().byId("textarea1").setValue(JSON.stringify(oData2));// mostrar no Text Area

                            MessageToast.show("Cadastrado com sucesso");
                        }else{
                            MessageToast.show("Erro no cadastro");    
                        }
                    },
                    error: function(oError){
                        that.getView().setBusy(false);//desbloqueando a interface ViewS
                        
                        console.log(oError);
                        var oObj = JSON.parse(oError.responseText);
                        MessageToast.show(oObj.error.message.value);
                    }}
                );
            },

            onReadOVCab: function(){
                debugger;
                var iOrdemId = this.getView().byId("lastOrdemId").getValue();// pega o metodo gerado pelo cliente guarda na variável se tiver vazia da mensagem
                if(iOrdemId == 0){
                    MessageToast.show("Crie um cabeçalho de ordem primeiro");
                    return;
                }

                this.read(iOrdemId); //lendo o id que quero ler, chamado método read
            },
            
            read: function(iOrdemId){ //lendo o id 
                debugger;
                var that   = this;
                var oModel = this.getOwnerComponent().getModel();

                this.getView().setBusy(true);
                oModel.read("/OVCabSet("+iOrdemId+")",{//chamando o metodo read do serviço, passando a entitySet    ue vc quer usar na requisição + o id da ordem de vendas que vc quer ler
                    //objetos de resposta suscesso ou erro
                    success: function(oData2, oResponse){
                        that.getView().setBusy(false);

                        that.getView().byId("textarea1").setValue(JSON.stringify(oData2));// pegando o Json e jogando no textArea

                        console.log(oData2);
                        console.log(oResponse);
                        MessageToast.show("Leitura realizada");
                    },
                    error: function(oError){
                        that.getView().setBusy(false);

                        console.log(oError);
                        var oObj = JSON.parse(oError.responseText);
                        MessageToast.show(oObj.error.message.value);
                    }
                });
            },

            onUpdatedOVCab: function(){//pega o idp valida e atualiza a ordem de venda 
                debugger;
                var iOrdemId = this.getView().byId("lastOrdemId").getValue();
                if(iOrdemId == 0){
                    MessageToast.show("Crie um cabeçalho de ordem primeiro");
                    return;
                }

                var oData = {
                    ClienteId: 2,
                    TotalItens: '150.00',
                    TotalFrete: '10.00',
                    TotalOrdem: '160.00',
                    Status: 'C'
                };
                this.update(iOrdemId,oData);
            },
            
            update: function(iOrdemId,oData){
                debugger;
                var that   = this;
                var oModel = this.getOwnerComponent().getModel();

                this.getView().setBusy(true);
                oModel.update("/OVCabSet("+iOrdemId+")",oData,{//entitySet + chave dela 
                    success: function(oData2, oResponse){
                        that.getView().setBusy(false);
                        console.log(oData2);
                        console.log(oResponse);
                        if(oResponse.statusCode == 204){
                            MessageToast.show("Atualizado com sucesso");
                        }else{
                            MessageToast.show("Erro em atualizar");
                        }
                    },
                    error: function(oError){
                        that.getView().setBusy(false);

                        console.log(oError);
                        var oObj = JSON.parse(oError.responseText);
                        MessageToast.show(oObj.error.message.value);
                    }}
                );
            },

            onDeleteOVCab: function(){
                debugger;
                var iOrdemId = this.getView().byId("lastOrdemId").getValue();
                this.delete(iOrdemId);
            },
            
            delete: function(iOrdemId){
                debugger;
                var that   = this;
                var oModel = this.getOwnerComponent().getModel();

                this.getView().setBusy(true);
                oModel.remove("/OVCabSet("+iOrdemId+")",{
                    success: function(oData2, oResponse){
                        that.getView().setBusy(false);

                        console.log(oData2);
                        console.log(oResponse);
                        if(oResponse.statusCode == 204){
                            MessageToast.show("Deletado com sucesso");
                        }else{
                            MessageToast.show("Erro em deletar");
                        }
                    },
                    error: function(oError){
                        that.getView().setBusy(false);
                        console.log(oError);

                        var oObj = JSON.parse(oError.responseText);
                        MessageToast.show(oObj.error.message.value);
                    }}
                );
            }
        });
    });