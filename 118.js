function createZTG(){
	try{
		var pn = [];
		var pv = ["on","off"];
		var sport = "", sval="", sdur="10";
		
		if (ports[portid][6]) {
			var arr = ports[portid][6].split(" ");
			if(arr.length>=3)
			{
				sdur = arr[1];
				sport = arr[2];
				sval = arr[3];
			}
		}  
		clearMenu();

		addMenuItem("label","helpitem",ZTG_HI);
		addMenuItem("label","menuitem","Seconds",cIF("duration","number",sdur,"[0-9]"),null);
		for (var i=0;i<ports.length;i++) pn[i] = ports[i][0];
		addMenuItem("label","titleitem","Action to execute:");
		addMenuItem("label","menuitem","Update port",cSF("port",sport,pn,pn),null);
		addMenuItem("label","menuitem","with value",cSF("portvalue",sval,pv,pv),null);
		addToolbarSaveCancelHelp(function(){
				send_command("ztg+"+ports[portid][0]+"+sec+"+pad(duration.value,5)+"+"+port.value+"+"+portvalue.value);
				loadPortsInfo(ports[portid][0]);
				displayPortDetails(portid);
			},function(){
				displayPortDetails(portid);
			});
	}catch(e){
		errorHandler(e);
	}  
}  


