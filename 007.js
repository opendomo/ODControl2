JS('008.js');
var ver,uid;
SC("ver",function(v){
	try {
		var p=v.target.responseText.split(" ");;
		odcontrolname = p[0];
		ver = p[2];
		uid = p[3];
		ID("f").innerHTML="v"+ver +" "+ uid;
	}catch(e){
		console.log("Error reading ODControl version");
	}
});
