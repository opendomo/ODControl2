function ID(id) {
   var d = document;
   return d.getElementById(id);
}
function CE(tag, cl, id) {
   var d = document;
   var e =  d.createElement(tag);
   if (cl && cl!="") e.setAttribute("class",cl);
   if (id && id!="") e.setAttribute("id",id);
   return e;
}
function CT(text) {
   var d = document;
   return d.createTextNode(text);
}

function pad(s,m) {
   return s.length<m?pad("0"+s,m):s;
}

function validate_field(id,patt) {
	var i=document.getElementById(id);
	if (i) {
		var re=new RegExp(patt);
		if(i.value.match(re)) {
			//i.style.backgroundColor='inherit';
			return true;
		} else {
			//i.style.backgroundColor='#F3C3C3';
			alert("Invalid value in " + i.id);
			return false;
		}
	} else {
		return true;
	}
}

