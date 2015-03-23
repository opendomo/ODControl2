function f(){
	var s=ID("s_p");
	var i=ID("i_p");
	var t=ID("toler");
	if(ID("analog").value=="true"){show(i);show(t);hide(s);}
	else{hide(i);hide(t);show(s);}
}
function createVP(cmd){
clearMenu();
var j=portid;
addMenuItem("label","helpitem",cmd=="var"?VAR_HI:PER_HI);
addMenuItem("da","menuitem",LBL_ANA,cCF("analog",isType("A")),f);
var v=ports[j][4];
addMenuItem("s_p","menuitem",LBL_VAL,cSF("sp",v,["ON","OFF"]));
addMenuItem("i_p","menuitem",LBL_VAL,cIF("ip","number",parseInt(v)));
addMenuItem("toler","menuitem",LBL_TOL,cIF("tol","number",parseInt(ports[j][7])));
var s=ID("sp");
var i=ID("ip");
var t=ID("tol");
var a=ID("analog");
f();
addToolbarSaveCancelHelp(function(){
var p=ports[j][0];
var f="";
var v="";
if(a.value=="true"){
	f="+a";
	v=i.value+"0000";
}else{
	f="+d";
	v=s.value;
}
send_command("cfg+"+p+f);
send_command(cmd+" "+p);
send_command("set+"+p+"+"+v);
send_command("tol+"+p+"+"+t.value);
loadPortsInfo(p);
displayPortDetails(j);
},function(){displayPortDetails(j);},"");
}

