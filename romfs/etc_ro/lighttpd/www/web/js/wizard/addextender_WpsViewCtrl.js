/* svn info: $Revision: 847 $ $Date: 2018-06-06 18:37:11 +0800 (Wed, 06 Jun 2018) $ */
define(["wizPath/wizardModel","wizPath/wizardView"],function(e,t){var s,c=null,d=null;function i(e){return s=$.Deferred(),e,$(".wizard_projectName").html(projectName),u(),$("#DUTToClientRight").attr("src","image/wireless_on.gif"),$("#DUTToClientLeft").attr("src","image/wireless_on_180.gif"),$("#wizard_title").html(I18N("j","Install")),$("#topology").hide(),$("#language_table").hide(),$(".wizard2_setupTable").hide(),$(".wizard2_setupTable_Covrwifi").show(),$("#wizButton_back").hide(),$("#wizButton_next").hide(),$("#Wizard2").show(),$("#closeWizBtn").off("vclick").on("vclick",function(){"none"!=$("#WizardSection").css("display")&&function(){$("#WizardSection").hide(),w(),$("#CreatePopAlertMessage_addextenderwizard").hide(),null==hometimer&&(initHomeViewController(!1),hometimer=setInterval("initHomeViewController(false)",5e3));null==hometimer2&&(Get_ClientInfo(),hometimer2=setInterval("Get_ClientInfo()",6e3));null==hometimer3&&(GetXMLPLC(),hometimer3=setInterval("GetXMLPLC()",6e3));s.reject()}()}),s.promise()}var m=null;function u(){clearTimeout(wpstimer),clearInterval(wpstimer2),wpstimer2=null,wpstimer=null,m=null;var t=120,e='<span id="wps_countdown">'+t+"</span>";currentDevice.featureCovrWIFI_e?$("#Wizard2Desc").html(LocalLang.Read("Wizard.WIZARD102",e)):$("#Wizard2Desc").html(LocalLang.Read("Wizard.WIZARD10",e));var i=$("#wps_countdown");c=setInterval(function(){0<t?(t--,i.html(t)):a()},1e3);var n=new SOAPGetWiFiSONSettingsResponse,r=new SOAPAction,l=new SOAPGetWiFiSONSettingsResponse,o=new SOAPAction;r.sendSOAPAction("GetWiFiSONSettings",null,n).done(function(e){startWPSPBC(t).progress(function(e){d=e}).done(function(e){m=setInterval(function(){o.sendSOAPAction("GetWiFiSONSettings",null,l).done(function(e){l.WiFiSONList.WiFiSON.length>n.WiFiSONList.WiFiSON.length&&(w(),$("#WizardSection").hide(),$("#CreatePopAlertMessage_addextenderwizard2").show(),w(),$(".success_closewizard_ok").on("click",function(){$("#CreatePopAlertMessage_addextenderwizard2").hide(),null==hometimer&&(initHomeViewController(!1),hometimer=setInterval("initHomeViewController(false)",5e3)),null==hometimer2&&(Get_ClientInfo(),hometimer2=setInterval("Get_ClientInfo()",6e3)),null==hometimer3&&(GetXMLPLC(),hometimer3=setInterval("GetXMLPLC()",6e3)),s.reject()}))}).fail(function(){})},1500)}).fail(function(){})}).fail(function(){});var a=function(){w(),"none"!=$("#WizardSection").css("display")&&($("#WizardSection").hide(),$("#CreatePopAlertMessage_addextenderwizard").show(),w(),$(".extenderwizard_ok").off("click").on("click",function(){$("#WizardSection").show(),u(),$("#CreatePopAlertMessage_addextenderwizard").hide()}),$(".extenderwizard_cancel").off("click").on("click",function(){$("#CreatePopAlertMessage_addextenderwizard").hide(),null==hometimer&&(initHomeViewController(!1),hometimer=setInterval("initHomeViewController(false)",5e3)),null==hometimer2&&(Get_ClientInfo(),hometimer2=setInterval("Get_ClientInfo()",6e3)),null==hometimer3&&(GetXMLPLC(),hometimer3=setInterval("GetXMLPLC()",6e3)),s.reject()}))}}function w(){clearInterval(d),clearInterval(c),c=d=null,clearTimeout(wpstimer),clearInterval(wpstimer2),wpstimer2=null,wpstimer=null,clearInterval(m),m=null}return{init:function(e){return i(e)}}});