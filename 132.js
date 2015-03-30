function loadConfiguration(){
clearMenu();
var e= document.createElement("textarea");
e.setAttribute("class", "tpl");
e.setAttribute("id","tpl");
e.setAttribute("resize","none");
e.appendChild(document.createTextNode("<copy commands here>"));
addMenuItem("startsess","menuitem",LBL_CONF,e,null);
e.addEventListener("click",function(){
	ta=ID("tpl");
	if(ta.value=="<copy commands here>")
		ta.value="";
});
var tbr=CE("div");
tbr.setAttribute("class","buttons");
var menu_ok_caption=CT(MNU_LCONF);
var menu_ok=CE("a");
menu_ok.setAttribute("class","button");
menu_ok.addEventListener("click",function(){
	ta=ID("tpl");
	loadTemplate(ta.value);
});
menu_ok.appendChild(menu_ok_caption);
tbr.appendChild(menu_ok);
var menu_cancel_caption=CT(LBL_EXI);
var menu_cancel=CE("a");
menu_cancel.setAttribute("class","button");
menu_cancel.addEventListener("click",loadMenu);
menu_cancel.appendChild(menu_cancel_caption);
tbr.appendChild(menu_cancel);
ID("menu").appendChild(tbr);
}

