var templates =[];
function loadTemplates() {
	if (templates.length ==0){
		JS("http://cloud.opendomo.com/odctp/json.php?ver="+ver+"&uid="+uid);
		for(var i=80;i<=89;i++)JS('0'+i+'.js');
		setTimeout(listTemplates, 1000);
	}else {
		listTemplates();
	}
}
function listTemplates(){
	clearMenu();
	try{
		addMenuItem("mess","helpitem",MSG_TEMP);
		for (var i=0;i<templates.length;i++){
			addMenuItem("temp_"+i, "menuitem", templates[i].name, null, 
				function(){loadTemplate(templates[parseInt(this.id.split("_")[1])]);});
		}	
	} catch(e){}
	addToolbarSaveCancelHelp(null, loadMenu, "template");
}
