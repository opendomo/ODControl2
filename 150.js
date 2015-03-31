function dpd_virtuals_2(id) {
	sel = id;
	var t = ports[id][5];
	var extdata = CT(" (" + ports[id][6] + ")");
	addMenuItem("selVAR",t=="VAR"?"optionsel":"option",
		MNU_VAR,
		t=="VAR"?extdata:null,
		function(){createVP("var");});
	addMenuItem("selPER",t=="PER"?"optionsel":"option",
		MNU_PER,
		t=="PER"?extdata:null,
		function(){createVP("per");});
	addMenuItem("selGRP",
		t=="GRP"?"optionsel":"option",
		MNU_GRP,
		t=="GRP"?extdata:null,
		createGRP);
	addMenuItem("selTTG",
		t=="TTG"?"optionsel":"option",
		MNU_TTG,
		t=="TTG"?extdata:null,
		createTTG);
	addMenuItem("selDTG",
		t=="DTG"?"optionsel":"option",
		MNU_DTG,
		t=="DTG"?extdata:null,
		createDTG);	
}

