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
	//loadODinfo()
	loadPortsInfo();
	loadLinksInfo();
	return true;
}

