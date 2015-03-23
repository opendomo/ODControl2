function extractConfiguration_switch(res, i, pType, pName, pPage){
	switch(pType){
		case "DI":
			res = res + "cfg " + pName + " di" + pPage + EOL;
			break;
		case "DO":
			res = res + "cfg " + pName + " do" + pPage + EOL;
			break;
		case "DX":
			res = res + "cfg " + pName + " x" + pPage + EOL;
			break;
		case "AI":
			var rangevals = ports[i][5].split("|");
			res = res + "cfg " + pName + " " + ports[i][6] + pPage + EOL;
			res = res + "rng " + pName + " " + rangevals[0] + " " + rangevals[1] + EOL;
			break;
		case "AO":
			var rangevals = ports[i][5].split("|");
			res = res + "cfg " + pName + " " + ports[i][6] + pPage + EOL;
			res = res + "rng " + pName + " " + rangevals[0] + " " + rangevals[1] + EOL;
			break;
		case "VX":
			res = res + "cfg " + pName + " x" + pPage + EOL;
			break;
		case "XV":
			break;
		default:
			res = res + "cfg " + pName + " d" + pPage + EOL;
			res = res + vportExtractConfig(ports[i]);
			break;
	}

	return res;
}

