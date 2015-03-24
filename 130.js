function my_confirm(text,callback_txt) {
	var a = initmsg();
	var b = ID("alertbgnd");
	a.innerHTML = "<h1>" + LBL_CFM + "</h1>"
		"<p>" + text + "</p>" +
		"<button onclick='hidealert()'>"+LBL_CANCEL+"</button>" + 
		"<button onclick=\"" + callback_txt + "\" >"+LBL_OK+"</button>";
	a.style.display = "block";
	b.style.display = "block";
}
function my_alert(text){
	my_confirm(text,"hidealert()");
}
function hidealert() {
	var a = ID("alertbox");
	var b = ID("alertbgnd");
	a.style.display = "none";
	b.style.display = "none";
}

