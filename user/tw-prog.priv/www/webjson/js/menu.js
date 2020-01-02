var menu_Check_Settings = 0;
var menu_Check_Advanced = 0;
var menu_Check_Management = 0;
function initialMenu() {
    var a = "<ul>";
    a += "	<li><a id='menu_Home' href='javascript:CheckHTMLStatus(\"Home\");' onclick='return confirmExit();'>" + I18N("j", "Home") + "</a></li>";
    a += "	<li class='parent' id='m_Settings' onmouseover='this.className=\"parentOn\";menu_Check_Settings=0;' onmouseout='this.className=\"parent\";menu_Check_Settings=1;' onclick='javascript:CheckClickStatus(\"m_Settings\");'><a id='menu_Settings' href='#'>" + I18N("j", "Settings") + "</a>";
    a += "		<ul>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Wizard_Manual\");' onclick='return confirmExit()'>" + I18N("j", "Wizard") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Internet\");' onclick='return confirmExit();'>" + I18N("j", "Internet(WAN)") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"WiFi\");' onclick='return confirmExit()'>" + I18N("j", "Wireless(Wi-Fi)") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Network\");' onclick='return confirmExit()'>" + I18N("j", "Network(LAN)") + "</a></li>";
   /* if (currentDevice.featureSharePort) {*/
        a += "			<li><a href='javascript:CheckHTMLStatus(\"SharePort\");' onclick='return confirmExit()'>" + I18N("j", "SharePort") + "</a></li>"
    /*}
    if (currentDevice.featureMyDLink) {
        a += "			<li><a href='javascript:CheckHTMLStatus(\"Mydlink\");' onclick='return confirmExit()'>" + I18N("j", "mydlink") + "</a></li>"
    }*/
    a += "		</ul>";
    a += "	</li>";
    a += "	<li class='parent' id='m_Advanced' onmouseover='this.className=\"parentOn\";menu_Check_Advanced=0;' onmouseout='this.className=\"parent\";menu_Check_Advanced=1;' onclick='javascript:CheckClickStatus(\"m_Advanced\");'><a id='menu_Advanced' href='#'>" + I18N("j", "Advanced") + "</a>";
    a += "		<ul>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"QoS\");' onclick='return confirmExit()'>" + I18N("j", "QoS Engine") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Firewall\");' onclick='return confirmExit()'>" + I18N("j", "Firewall") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"PortTrigger\");' onclick='return confirmExit()'>" + I18N("j", "Port Trigger") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"PortForwarding\");' onclick='return confirmExit()'>" + I18N("j", "Port Forwarding") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"WebsiteFilter\");' onclick='return confirmExit()'>" + I18N("j", "Website Filter") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"StaticRoute\");' onclick='return confirmExit()'>" + I18N("j", "Static Route") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"IPTV\");' onclick='return confirmExit()'>" + I18N("j", "IPTV") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"DynamicDNS\");' onclick='return confirmExit()'>" + I18N("j", "Dynamic DNS") + "</a></li>";
	a += "			<li><a href='javascript:CheckHTMLStatus(\"USBApplications\");' onclick='return confirmExit()'>" + I18N("j", "USB Applications") + "</a></li>";
    a += "		</ul>";
    a += "	</li>";
    a += "	<li class='parent' id='m_Management' onmouseover='this.className=\"parentOn\";menu_Check_Management=0;' onmouseout='this.className=\"parent\";menu_Check_Management=1;' onclick='javascript:CheckClickStatus(\"m_Management\");'><a id='menu_Management' href='#'>" + I18N("j", "Management") + "</a>";
    a += "		<ul>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Time\");' onclick='return confirmExit()'>" + I18N("j", "Time & Schedule") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"SystemLog\");' onclick='return confirmExit()'>" + I18N("j", "System Log") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Admin\");' onclick='return confirmExit()'>" + I18N("j", "System Admin") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"UpdateFirmware\");' onclick='return confirmExit()'>" + I18N("j", "Upgrade") + "</a></li>";
    a += "			<li><a href='javascript:CheckHTMLStatus(\"Statistics\");' onclick='return confirmExit()'>" + I18N("j", "Statistics") + "</a></li>";
    a += "		</ul>";
    a += "	</li>";
    a += "</ul>";
    document.getElementById("menu").innerHTML = a
}
function CheckClickStatus(a) {
    switch (a) {
    case "m_Settings":
        if (menu_Check_Settings == 0) {
            document.getElementById("m_Settings").className = "parent";
            menu_Check_Settings = 1
        } else {
            document.getElementById("m_Settings").className = "parentOn";
            menu_Check_Settings = 0
        }
        break;
    case "m_Advanced":
        if (menu_Check_Advanced == 0) {
            document.getElementById("m_Advanced").className = "parent";
            menu_Check_Advanced = 1
        } else {
            document.getElementById("m_Advanced").className = "parentOn";
            menu_Check_Advanced = 0
        }
        break;
    case "m_Management":
        if (menu_Check_Management == 0) {
            document.getElementById("m_Management").className = "parent";
            menu_Check_Management = 1
        } else {
            document.getElementById("m_Management").className = "parentOn";
            menu_Check_Management = 0
        }
        break
    }
}
function setMenu(a) {
    if (localStorage.getItem("language") == "ru-ru") {
        document.getElementById(a).style.background = "url(./image/navigation_bg6.gif) right top no-repeat"
    } else {
        document.getElementById(a).style.background = "url(./image/navigation_bg5.gif) right top no-repeat"
    }
}
function CheckHTMLStatus(a) {
    if (a != "") {
        $.ajax({
            cache: false,
            url: a + ".html",
            timeout: 5000,
            type: "GET",
            error: function() {
                document.getElementById("DetectRouterConnection").style.display = "inline"
            },
            success: function(b) {
                document.getElementById("DetectRouterConnection").style.display = "none";
                self.location.href = a + ".html"
            }
        })
    } else {
        $.ajax({
            cache: false,
            url: "./js/CheckConnection",
            timeout: 5000,
            type: "GET",
            error: function() {
                document.getElementById("DetectRouterConnection").style.display = "inline"
            },
            success: function(b) {
                document.getElementById("DetectRouterConnection").style.display = "none"
            }
        })
    }
};