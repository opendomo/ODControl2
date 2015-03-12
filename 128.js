function exportConfiguration() {
	var template=extractConfiguration();
   clearMenu();

   var initbutton= document.createElement("textarea");
   initbutton.setAttribute("class", "tpl");
   initbutton.setAttribute("resize","none");
   initbutton.setAttribute("readonly","");
   initbutton.appendChild(document.createTextNode(template));
   addMenuItem("startsess","menuitem","Configuration: ",initbutton,null);
   addMenuItem("startsess","titleitem","Device names, dates, passwords and network configuration are not included ",null,null);
	addToolbarSaveCancelHelp(null,loadMenu);
}

