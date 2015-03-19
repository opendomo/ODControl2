JS('008.js');
var ver,uid;
SC("ver",function(v){
	var p=v.split(" ");;
	if(p.length>2){
		odcontrolname = p[0];
		ver = p[2];
		uid = p[3];
		ID("f").innerHTML="v"+ver +" "+ uid;
	}else{
		console.log("Error reading ODControl version");
		return false;
	}
});
