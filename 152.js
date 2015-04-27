function displayPortDetails(id){
	if(ports[id][0].indexOf("$")==0){
		my_alert(ERR_SYS);return false;
	}
	sel=id;
	portid=id;
	try{
	dpd_init(id);
	if (isanalog(id)) dpd_analog(id);
	if (isvirtual(id) && isenabled(id)) {
		dpd_virtuals(id);
	}
	addToolbarSaveCancelHelp(function(){
	if(validate_field("portname",rx_str5)){
		if(ports[sel][0]!=portname.value){
			send_command("lbl+"+ports[sel][0]+"+"+portname.value);
			ports[sel][0]=portname.value;
		}
	}else{my_alert(ERR_SAV);return false;}
	var flags="";
	if(isenabled(id)){
		if(isdigital(sel)){flags+="d";}
		if(enabled.value==false||enabled.value=="false"){
			flags="x";
		}else{
			if(visible.value!="false"){
				if(inconfig.value!="false")flags+="S";
				else flags+="s";
			}else{flags+="h";}
		}
	}
	if(flags=="" && (enabled.value==true||enabled.value=="true"))flags+="d";
	dpd_apply(id, flags);
	},function(){loadPortsMenu();},"virtualports");
	}catch(e){my_alert(e.message);}
}
