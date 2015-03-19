function loadNetworkConfig(){
	try {
		var resp = send_command("net+show");
		var data = ptoREST(resp);
		if (!data || resp.indexOf("DONE")==-1) {
			alert(MSG_NOAV);
			return false;
		}
		loadNetworkConfig_menu(data);
		addToolbarSaveCancelHelp(function() {
			var webui_value = ID("webui").value;
			send_command("net+port+webui+" + webui_value);
			var webcf_value = ID("webcf").value;
			send_command("net+port+webcf+" + webcf_value);
			var proto_value = ID("proto").value;
			send_command("net+port+proto+" + proto_value);
			var ip= ID("ip").value;
			send_command("net+ip+" + ip);
			var gw= ID("gateway").value;
			send_command("net+gw+" + gw);
			var nm= ID("netmask").value;
			send_command("net+nm+" + nm);
			var ntp= ID("ntp").value; 
			send_command("net+ntp+" + ntp);
			var ev= ID("ev").value;
			send_command("net+ev+" + ev);  
			alert(TXT_OKNAME);
		}, loadMenu, "net");
	
	} catch (e) {
		errorHandler(e);
	}
}

