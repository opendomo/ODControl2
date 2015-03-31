function my_confirm(text,callback_txt) {
	var a = initmsg();
	var b = ID("alertbgnd");
	a.innerHTML = "<h1>" + LBL_CFM + "</h1>" +
		"<p>" + text + "</p>" +
		"<button class='lb' onclick='hidealert()'>"+LBL_CANCEL+"</button>" + 
		"<button class='rb' onclick=\"" + callback_txt + "\" >"+LBL_OK+"</button>";
	a.style.display = "block";
	b.style.display = "block";
}
function my_alert(text){
	var a = initmsg();
	var b = ID("alertbgnd");
	a.innerHTML = "<h1>" + LBL_ALE + "</h1>" +
		"<p>" + text + "</p>" +
		"<button class='ub' onclick='hidealert()'>"+LBL_OK+"</button>";
	a.style.display = "block";
	b.style.display = "block";
}
function hidealert() {
	var a = ID("alertbox");
	var b = ID("alertbgnd");
	a.style.display = "none";
	b.style.display = "none";
}
function errorHandler(e) {
	console.log("Runtime error. Reloading menu.", e.message);
	loadMenu();
}
function getPortId(pname) {
	for (var i=0;i<ports.length;i++) {
		if (ports[i][0]==pname) return i;
	}
	return -1;
}