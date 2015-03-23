extractConfiguration = function (){
	 var res="";

	for (var i=0;i<ports.length;i++) {
		  if ((defpn[i]!=ports[i][0]) && (ports[i][0].indexOf("$")==-1) ){
			res = res + "lbl "+defpn[i]+" "+ports[i][0] + EOL;
		}
	}
	for (var i=0;i<ports.length;i++) {
		  var tag = ports[i][2];
		  if (tag!="_") res = res + "tag "+ ports[i][0] + " " +tag + EOL;	
	 }

	for (i=0;i<ports.length;i++) {
		if (ports[i][0].indexOf("$")==-1){
			var pType = ports[i][1];
			var pName = ports[i][0];
			var pPage = "";

			//TODO Replace this for the new pagination system in 2.0
			switch (ports[i][3].substring(2,3)) {
				case "M": pPage = "s"; break;
				case "C": pPage = "S"; break;
				default: pPage = "h"; }

			res=extractConfiguration_switch(res, i, pType, pName, pPage);
			}
	}
	 for(var i=0;i<mylinks.length;i++){
		  var p1 = mylinks[i][0];
		  var p2 = mylinks[i][1];
		  if (p1 && p2) {
				res = res + "lnk " + p1 + " " + p2 + " " + mylinks[i][2] + EOL;
		  }
	 }
	 return res;
};

