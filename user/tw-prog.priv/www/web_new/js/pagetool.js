/* svn info: $Revision: 1052 $ $Date: 2018-08-16 20:11:07 +0800 (Thu, 16 Aug 2018) $ */
function initialDetectRouterConnection(e){var t="";t+="Home"==e?'<div id="dialogBox" style="width:616px">':'<div class="dialogBox" style="width:616px">',t+='<table class="myCreatePop_table" border="0" cellspacing="0" id="RouterConnectionTable">',t+="<tbody>",t+='<tr><td colspan="3"><div class ="popTitle">'+I18N("j","Device not found")+"</div></td></tr>",t+='<tr><td id="save_td" colspan="4"><center><div id="Save_edit_pop_btn" style="cursor:pointer" tabindex="12" onclick="CheckHTMLStatus(\'\');">'+I18N("j","Retry")+"</div></center></td></tr>",t+="</tbody>",t+="</table>",t+="</div>",document.getElementById("DetectRouterConnection").innerHTML=t}function save_button_changed(){changeFlag=!0,document.getElementById("Save_Disable_btn").style.display="none",document.getElementById("Save_btn").style.display="block",changeTimeoutAction()}function SetCheckBoxEnable(e,t,n){SetCheckBox(e,I18N("j","Enabled"),I18N("j","Disabled"),n,t)}function SetCheckBox(e,t,n,c,d){var o,i=e+"_ck";d?o=!c:(o=!!document.getElementById(i).checked,save_button_changed()),o?(document.getElementById(e).className="checkbox_off",document.getElementById(e).innerHTML='<input type="checkbox" id="'+i+'" name="'+i+'" checked>'+n,document.getElementById(i).checked=!1):(document.getElementById(e).className="checkbox_on",document.getElementById(e).innerHTML='<input type="checkbox" id="'+i+'" name="'+i+'" checked>'+t,document.getElementById(i).checked=!0)}function presetCheckBox(e,t){var n=document.getElementById(e),c=e+"_ck";if(1==t){var d=I18N("j","Enabled");$("#"+e).attr("class","checkbox_on"),n.innerHTML='<input type="checkbox" name='+e+" id="+c+" checked>"+d,document.getElementById(c).checked=!0}else{var o=I18N("j","Disabled");$("#"+e).attr("class","checkbox_off"),n.innerHTML='<input type="checkbox" name='+e+" id="+c+" checked>"+o,document.getElementById(c).checked=!1}}function showAdv(e){var t=document.getElementById(e);"none"==t.style.display||""==t.style.display?t.style.display="block":t.style.display="none",changeTimeoutAction()}function redirectPage(e){var t=sessionStorage.getItem("RedirectUrl");null!=e&&(t=e),null==t&&(t="/"),self.location.href=t}