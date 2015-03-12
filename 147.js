
function displayPortDetails_menu_init(id){
   clearMenu();
	var e=cIF("portname","text",ports[id][0],"[a-zA-Z0-9]{5}");
	SA(e,"maxlength",5);
   addMenuItem("fldportname","menuitem","Port name",e,null);

   var en=cCF("enabled",isenabled(id));
   addMenuItem("fldenable","menuitem","Enable", en, null);
	if(!isvirtual(id))
	{
		ID("fldenable").style.display="none";
	}
	if(isenabled(id))
	{
		addMenuItem("fldvisible","menuitem","Visible",
			cCF("visible",isvisible(id)),null);
		addMenuItem("fldinconfig","menuitem","Show in config",
			cCF("inconfig",isinconfig(id)),null);

		addMenuItem("fldtag","menuitem","Tag",
			cSF("tag",ports[id][2],tags,tags_desc),null);
	}
}


