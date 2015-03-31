function dpd_virtuals_1(id) {
	sel = id;
	var t = ports[id][5];
	var extdata = CT(" (" + ports[id][6] + ")");
	addMenuItem("selZTG", 
		t=="ZTG"?"optionsel":"option", 
		"Countdown",	
		t=="ZTG"?extdata:null, createZTG);
	addMenuItem("selTRG", 
		t=="TRG"?"optionsel":"option", 
		"Conditional", 
		t=="TRG"?extdata:null, createTRG);
	addMenuItem("selRDV", 
		t=="RDV"?"optionsel":"option", 
		"Remote device", 
		t=="RDV"?extdata:null, createRDV);
	addMenuItem("selRPT", 
		t=="RPT"?"optionsel":"option", 
		"Remote port", 
		t=="RPT"?extdata:null, createRPT);
	addMenuItem("selMDB", 
		t=="MDB"?"optionsel":"option", 
		"Modbus port", 
		t=="MDB"?extdata:null, createMDB);
	addMenuItem("selSCH", 
		t=="SCH"?"optionsel":"option", 
		"Scheduler", 
		t=="SCH"?extdata:null, createSCH);
}

