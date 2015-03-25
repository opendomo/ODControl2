function cSF(id,value,array_val,array_desc) {
	var input=document.createElement("select");
	input.setAttribute("id",id);
	if (!array_desc) array_desc=array_val;
	for (var i=0;i<array_val.length;i++) {
		var o=document.createElement("option");
		o.setAttribute("value",array_val[i]);
		if (value == array_val[i]) o.setAttribute("selected","selected");
		o.appendChild(document.createTextNode(array_desc[i]));
		input.appendChild(o);
	}
	return input;
}
function init(){
	var h=ID("adv");
	if(!h){
		ID("h").innerHTML="";
		TB('hme','Home','HME');
		TB('cfg','Settings','CFG');
		TB('adv','Configure','ADV');
		SA(ID("h"),"class","hme");
		HME();
	}
}
init();
