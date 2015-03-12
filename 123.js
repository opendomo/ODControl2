function addToolbarSaveCancelHelp(callbacksave,callbackcancel,keyword){
	var tbr=CE("div");
	tbr.setAttribute("class","buttons");
	if(callbacksave){
		var menu_ok_caption=CT("Save changes");
		var menu_ok=CE("a");
		menu_ok.setAttribute("id","savetxt");
		menu_ok.setAttribute("class","button");
		menu_ok.addEventListener("click",callbacksave);
		menu_ok.appendChild(menu_ok_caption);
		tbr.appendChild(menu_ok);
	}
	if(callbackcancel){
		var menu_cancel_caption=CT("Exit");
		var menu_cancel=CE("a");
		menu_cancel.setAttribute("class","button");
		menu_cancel.setAttribute("id","exittxt");
		menu_cancel.addEventListener("click",callbackcancel);
		menu_cancel.appendChild(menu_cancel_caption);
		tbr.appendChild(menu_cancel);
	}
	ID("menu").appendChild(tbr);
}

