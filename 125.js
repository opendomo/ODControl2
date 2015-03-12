var errorlog = [];
function loadTemplateNextCommand(){
var i=curr_tpl_cmd;
if(i==-1||i>=cmds.length){
	clearTimeout(current_template_timer);
	if(failedcommands!=0){
		alert("Configuration loaded with errors :(");
		var e=ID("errlog");
		for(var i=0;i<errorlog.length;++i)
			e.value+=errorlog[i]+"\\n";
		console.log(errorlog);
	}else{
		alert("Configuration loaded!");
		loadMenu();
		return false;
	}
}else{
	progress.value=i+1;
	if(cmds[i].indexOf("#")==-1&&cmds[i]!=""){
	var resp=send_command(cmds[i]);
	if(resp.indexOf("DONE")==-1){
		failedcommands++;
		ID("progresserr").value=failedcommands;
		errorlog.push("Command: ["+cmds[i]+"] Result: ["+resp.replace("\\n","")+"]");
	}
	if(resp==""){
		curr_tpl_cmd--;
		send_command("ver+");
	}
	ID("progresscurrent").value=i+1;
	}else{
		curr_tpl_cmd++;
		loadTemplateNextCommand();
	}
	curr_tpl_cmd++;
	current_template_timer=setTimeout(loadTemplateNextCommand,100);
}

}

