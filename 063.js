function idh(i,d)
{
	d.title=i;
	d.onclick=function(){
		if(this.className=="selected"){
			scheduleval=scheduleval - Math.pow(2,parseFloat(this.title));
			this.className="unselected";
		}else{
			scheduleval=scheduleval + Math.pow(2,parseFloat(this.title));
			this.className="selected";						
		}
		var hex = "0000000000" + scheduleval.toString(16);
		SV(this.parentNode.previousSibling.id,"0x"+hex.substr(-8));
	};
	return d;
}
function idw(i,d)
{
	d.title=i;
	d.onclick=function(){
		if (this.className=="selected"){
			scheduleval=scheduleval - Math.pow(2,parseFloat(this.title));
			this.className="unselected";
		}else{
			scheduleval=scheduleval + Math.pow(2,parseFloat(this.title));
			this.className="selected";						
		}
		var hex = "00" + scheduleval.toString(16);
		SV(this.parentNode.previousSibling.id,"0x"+hex.substr(-2));
	};
	return d;
}

