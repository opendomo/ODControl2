var errorlog = [];
function loadTemplateNextCommand(){
var i=curr_tpl_cmd;
if(i==-1||i>=cmds.length){
	clearTimeout(current_template_timer);
	if(failedcommands!=0){
		my_alert(MSG_LERR);
		var e=ID("errlog");
		for(var i=0;i<errorlog.length;++i)
			e.value+=errorlog[i]+EOL;
		console.log(errorlog);
	}else{
		my_alert(MSG_SUCC);
		loadMenu();
		return false;
	}
}else{
	progress.value=i+1;
	if(cmds[i].indexOf("#")==-1&&cmds[i]!=""){
	var resp=send_command(cmds[i]);
	if(resp.indexOf("DONE")==-1){
		failedcommands++;
		ID("pe").value=failedcommands;
		errorlog.push(cmds[i]+" Result: ["+resp.replace(EOL,"")+"]");
	}
	if(resp==""){
		curr_tpl_cmd--;
		send_command("ver+");
	}
	ID("pc").value=i+1;
	}else{
		curr_tpl_cmd++;
		loadTemplateNextCommand();
	}
	curr_tpl_cmd++;
	current_template_timer=setTimeout(loadTemplateNextCommand,100);
}
}
