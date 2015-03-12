function displayPortDetails_process_virtuals_1(id) {
	if (isvirtual(id) && isenabled(id)) {
		sel = id;
		var t = ports[id][5]; // Type of the port?
		var extdata = " (" + ports[id][6] + ")";
		addMenuItem("selZTG",
			t=="ZTG"?"optionsel":"option",
			t=="ZTG"?"Countdown" +extdata:"Countdown",
			null,
			createZTG);
		addMenuItem("selTRG",
			t=="TRG"?"optionsel":"option",
			t=="TRG"?"Condition" +extdata:"Conditional",
			null,
			createTRG);
		addMenuItem("selRDV",
			t=="RDV"?"optionsel":"option",
			t=="RDV"?"Remote device" +extdata:"Remote device",
			null,
			createRDV);
		addMenuItem("selRPT",
			t=="RPT"?"optionsel":"option",
			t=="RPT"?"Remote port" +extdata:"Remote port",
			null,
			createRPT);
		addMenuItem("selMDB",
			t=="MDB"?"optionsel":"option",
			t=="MDB"?"MDB port" +extdata:"Modbus port",
			null,
			createMDB);
		addMenuItem("selSCH",
			t=="SCH"?"optionsel":"option",
			t=="SCH"?"SCH" +extdata:"Scheduler",
			null,
			createSCH);
		}
}

