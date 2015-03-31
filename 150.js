function dpd_virtuals_2(id) {
	sel = id;
	var t = ports[id][5];
	var extdata = " (" + ports[id][6] + ")";
	addMenuItem("selVAR",t=="VAR"?"optionsel":"option",
		MNU_VAR,
		null,
		function(){createVP("var");});
	addMenuItem("selPER",t=="PER"?"optionsel":"option",
		MNU_PER,
		CT(extdata),
		function(){createVP("per");});
	addMenuItem("selGRP",
		t=="GRP"?"optionsel":"option",
		MNU_GRP,
		CT(extdata),
		createGRP);
	addMenuItem("selTTG",
		t=="TTG"?"optionsel":"option",
		MNU_TTG,
		CT(extdata),
		createTTG);
	addMenuItem("selDTG",
		t=="DTG"?"optionsel":"option",
		MNU_DTG,
		CT(extdata),
		createDTG);	
}

