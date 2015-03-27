function loadTemplates() {
	if (typeof templates == "undefined"){
		JS("http://cloud.opendomo.com/odctp/json.php?ver="+ver+"&uid="+uid);
		setTimeout(listTemplates, 1000);
	}else {
		listTemplates();
	}
}
function listTemplates(){
	clearMenu();
	if (typeof templates == "undefined") {
		addMenuItem("mess","message",MSG_NONET);
		addToolbarSaveCancelHelp(function() {}, loadMenu, "net");  			
	} else {
		for (var i=0;i<templates.length;i++){
			addMenuItem("temp_"+i, "menuitem", templates[i], null, 
				function(){loadTemplate(parseInt(this.id.split("_")[1]));});
		}	
		addToolbarSaveCancelHelp(null, loadMenu, "net");  
	}
}