function loadTemplates() {
	JS("http://cloud.opendomo.com/odctp/list.php?ver=2.0&uid="+uid);
	clearMenu();
	setTimeout(function(){
		if (typeof templates == "undefined") {
			addMenuItem("mess","message","No internet connection");
			addToolbarSaveCancelHelp(function() {}, loadMenu, "net");  			
		} else {
			for (var i=0;i<templates.length;i++){
				addMenuItem("temp_"+i, "menuitem", templates[i], null, 
					function(){loadTemplate(parseInt(this.id.split("_")[1]));});
			}	
			addToolbarSaveCancelHelp(function() {
				alert("Configuration changed");
			}, loadMenu, "net");  
		}
	}, 1000);
}
/*setTimeout(function(){
var p=ID("main");
if(parseInt(document.title)>0){
	var template=parseInt(document.title);
	p=ID("log");
	p.innerHTML="<div id='main'><div id='h'></div><ul id='b'>Loading</ul><a id='f'></a></div>";
	loadODControlData();
	setTimeout(function(){loadTemplate(template);},1000);
}
odcontrolname=document.title;

},100);
*/