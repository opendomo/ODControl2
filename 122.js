setTimeout(function(){
var p=ID("main");
if(parseInt(document.title)>0){
	var template=parseInt(document.title);
	p=ID("log");
	p.innerHTML="<div id='main'><div id='h'></div><ul id='b'>Loading</ul><a id='f'></a></div>";
	loadODControlData();
	setTimeout(function(){loadTemplate(template);},1000);
}
odcontrolname=document.title;

},100);

