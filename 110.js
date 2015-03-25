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
	//var cont=document.createElement("a");
	//cont.appendChild(input);
	//return cont;
	return input;
}
function cIF(id,type,value,validation,callback) {
	var input=document.createElement("input");
	input.setAttribute("id",id);
	input.setAttribute("type",type?type:"text");
	if (validation && !callback) callback=function(){validate_field(id,validation);};

	if (value||value==0) input.setAttribute("value",value);
	if (validation) input.setAttribute("pattern",validation);
	if (callback) input.onblur=callback;

	return input;
}
