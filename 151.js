function dpd_apply(id,port_flags){
	if (isenabled(id)) {
	if (isanalog(sel)) { // Ranges and tolerance applies for analogs AFTER CFG
		send_command("cfg+"+ports[sel][0] + "+" + anlgtype.value + "+" + port_flags);
		send_command("tag+"+ports[sel][0] + "+" + tag.value);
		send_command("rng+"+ports[sel][0]+"+"+minvalue.value + "+" + maxvalue.value);
		send_command("tol+"+ports[sel][0]+"+"+((""==tolerance.value)?1:parseFloat(0+tolerance.value)));
	//port_flags += "a";
	} else {
		send_command("cfg+" + ports[sel][0] + "+" + port_flags);
		if(port_flags.indexOf("x")==-1)
			send_command("tag+" + ports[sel][0] + "+" + tag.value);
		}
	}
	else send_command("cfg+" + ports[sel][0] + "+" + port_flags);
	my_alert(MSG_SAV);
	loadPortsInfo();
	//PortDetails(portid);
	loadPortsMenu();
}

