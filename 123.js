function addToolbarSaveCancelHelp(callbacksave,callbackcancel,keyword){
	var tbr=CE("div");
	tbr.setAttribute("class","buttons");
	if(callbacksave){
		var mok=CE("a","button","savetxt");
		SA(mok,"alt",LBL_SAV);
		SA(mok,"aria-role","button");
		mok.addEventListener("click",callbacksave);
		mok.appendChild(CT(LBL_SAV));
		tbr.appendChild(mok);
	}
	if(callbackcancel){
		var mcan=CE("a","button","exittxt");
		SA(mcan,"alt",LBL_EXI);
		SA(mcan,"aria-role","button");
		mcan.addEventListener("click",callbackcancel);
		mcan.appendChild(CT(LBL_EXI));
		tbr.appendChild(mcan);
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
