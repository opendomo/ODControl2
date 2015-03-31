function addToolbarSaveCancelHelp(callbacksave,callbackcancel,keyword){
	var tbr=CE("div");
	tbr.setAttribute("class","buttons");
	if(callbacksave){
		var menu_ok_caption=CT(LBL_SAV);
		var menu_ok=CE("a","button","savetxt");
		menu_ok.addEventListener("click",callbacksave);
		menu_ok.appendChild(menu_ok_caption);
		tbr.appendChild(menu_ok);
	}
	if(callbackcancel){
		var menu_cancel_caption=CT(LBL_EXI);
		var menu_cancel=CE("a","button","exittxt");
		menu_cancel.addEventListener("click",callbackcancel);
		menu_cancel.appendChild(menu_cancel_caption);
		tbr.appendChild(menu_cancel);
	}
	ID("menu").appendChild(tbr);
}
function addToolbar(t){
	var tbr=CE("div","buttons","tbr");
	try{
		for (var i=0;i<t.length;i++){
			var i=CE("a","button",t.id);
			AC(i,CT(t.name));
			i.onclick=t.cb;
			AC(tbr,i);
		}
	}catch(e){
		console.log(e.message);
	}
	AC(ID("menu"),tbr);
}
