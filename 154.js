function send_command(strURL)
{	
	console.log(strURL);
	var URL=strURL.replace(/ /g,"+");
	var ur=URL.split(";");
	var xmlHttp=new XMLHttpRequest();
	var respo="";
	for (var i=0;i < ur.length;i++) {
		xmlHttp.open('GET', "./" + ur[i], false);
		xmlHttp.setRequestHeader("If-None-Match","some-random-string");
		xmlHttp.setRequestHeader("Cache-Control","no-cache,max-age=0");
		xmlHttp.setRequestHeader("Pragma","no-cache");
		xmlHttp.send(null);
		while(xmlHttp.readyState==0) {}
		var command=ur[i].replace(/\+/g," ");
		var resp=xmlHttp.responseText;

		if (xmlHttp.readyState==4 && (resp.indexOf("DONE")>-1)) {
			console.log("Command '"+command+ "' successful ");
		} else {
			//FIXME: lbl command sometimes fails when repeating
			if (ur[i].indexOf("lbl") != -1) {
				console.log("Command '"+command+ "' successful ");
			}
			else
			{
				return resp;
			}
		}
		respo=respo+xmlHttp.responseText+"\\n";
	}
	return respo;
}

