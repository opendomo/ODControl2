function displayPortDetails(id){
if(ports[id][0].indexOf("$")==0)
{alert("System ports can't be modified");return false;}
sel=id;
portid=id;
try{
displayPortDetails_menu_init(id);
displayPortDetails_process_analog(id);
displayPortDetails_process_virtuals_1(id);
displayPortDetails_process_virtuals_2(id);
addToolbarSaveCancelHelp(function(){
if(validate_field("portname",rx_str5)){
	if(ports[sel][0]!=portname.value){
		send_command("lbl+"+ports[sel][0]+"+"+portname.value);
		ports[sel][0]=portname.value;
	}
}else{alert("Wrong port name!");return false;}

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
displayPortDetails_apply_ranges_and_tolerances(id, flags);
},function(){loadPortsMenu();},"virtualports");
}catch(e){alert(e);}
}
