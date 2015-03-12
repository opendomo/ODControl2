function deleteLink(linkID){
   var l = parseInt(linkID);
   command = "unl+" + mylinks[l][0] + "+" + mylinks[l][1] + "+" + mylinks[l][2] ;
   ret = send_command(command);
   if (ret.indexOf("DONE")!=-1) {
      loadLinksInfo();
      alert("Link deleted!");
      setTimeout(function(){loadLinksMenu();},500);
   } else {
      warn(ret,"Error deleting link: "+ ret);
   }
}

function loadODControlData() {
   var v=send_command("ver");
	var p=v.split(" ");;
   if(p.length>2){
   	odcontrolname = p[0];
      ver = p[2];
   }else{
		console.log("Error reading ODControl version");
      return false;
   }

   loadPortsInfo();
   loadLinksInfo();
   return true;
}

