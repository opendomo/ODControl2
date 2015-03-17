JS('008.js');
var ver,uid;
function loadODinfo() {
	var v=send_command("ver");
	var p=v.split(" ");;
	if(p.length>2){
		odcontrolname = p[0];
		ver = p[2];
		uid = p[3];
	}else{
		console.log("Error reading ODControl version");
		return false;
	}
}